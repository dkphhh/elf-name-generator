import { JSONFilePreset } from 'lowdb/node';
import fs from 'fs/promises';
import path from 'path';

const DB_DIR = '/src/lib/db/elf-name-db/db';

console.log(path.join(process.cwd()));

const dbFilePath = fs.glob('*.json', { cwd: path.join(process.cwd(), DB_DIR) });

const db: Record<ElfRace, ElfNameDb> = {} as Record<ElfRace, ElfNameDb>;

for await (const filePath of dbFilePath) {
	const d = (await JSONFilePreset(
		path.join(process.cwd(), DB_DIR, filePath),
		{}
	)) as unknown as ElfNameDb;
	db[path.parse(filePath).name as ElfRace] = d;
}

export default db;
