import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const LOCALES_DIR = path.join(__dirname, '../src/i18n/locales');
const SOURCE_LOCALE = 'en.json';
const TARGET_LOCALES = ['hi.json'];

/**
 * Deeply merges source object into target object, filling in missing keys.
 */
function syncObjects(source, target) {
    const result = { ...target };

    for (const key in source) {
        if (typeof source[key] === 'object' && source[key] !== null && !Array.isArray(source[key])) {
            result[key] = syncObjects(source[key], target[key] || {});
        } else if (target[key] === undefined) {
            // This is where an AI translation API would be called.
            // For now, we'll prefix it so the user knows it needs translation,
            // or if the AI is running this, it can fill it in.
            result[key] = `[TRANSLATE]: ${source[key]}`;
        }
    }
    return result;
}

function main() {
    const sourcePath = path.join(LOCALES_DIR, SOURCE_LOCALE);
    if (!fs.existsSync(sourcePath)) {
        console.error(`Source file not found: ${sourcePath}`);
        process.exit(1);
    }

    const sourceData = JSON.parse(fs.readFileSync(sourcePath, 'utf8'));

    TARGET_LOCALES.forEach(targetFile => {
        const targetPath = path.join(LOCALES_DIR, targetFile);
        let targetData = {};

        if (fs.existsSync(targetPath)) {
            targetData = JSON.parse(fs.readFileSync(targetPath, 'utf8'));
        }

        console.log(`Syncing ${targetFile}...`);
        const syncedData = syncObjects(sourceData, targetData);

        fs.writeFileSync(targetPath, JSON.stringify(syncedData, null, 4), 'utf8');
        console.log(`Updated ${targetFile} successfully.`);
    });
}

main();
