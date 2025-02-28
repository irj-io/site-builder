import { join } from 'node:path';
export const env = (key) => {
    switch (key) {
        case 'DB_PATH':
            return join(process.cwd(), process.env[key] || 'src/content');
    }
    return process.env[key] || '';
};
//# sourceMappingURL=env.js.map