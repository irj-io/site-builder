'use client';
import { useEffect, useState } from 'react';
import { listPages, loadFile, saveFile } from '@/database/db-adapter';
import { captureError } from '@/utils/error';
import { Editor } from './editor';
function ErrorMessage({ message }) {
    return <p className="text-destructive">{message}</p>;
}
const formatFile = (file) => {
    const match = file.match(/(?:([^/]+)\/)?([^/]+)(\.[A-Za-z0-9]+)$/);
    let name = file;
    if (match && typeof match[1] === 'string' && typeof match[2] === 'string') {
        if (match[2] === 'index') {
            name = match[1] + (match[3] || '');
        }
        else {
            name = match[2] + (match[3] || '');
        }
    }
    return name;
};
export function EditorPageClient() {
    const [error, setError] = useState('');
    const [fileList, setFileList] = useState([]);
    const [file, setFile] = useState('');
    const [fileContents, setFileContents] = useState('');
    useEffect(() => {
        let ignore = false;
        listPages().then(([fileList, error]) => {
            if (error) {
                captureError(error);
                setError(error.message);
                return;
            }
            if (!ignore) {
                setFileList(fileList);
            }
        });
        return () => {
            ignore = true;
        };
    }, []);
    useEffect(() => {
        if (!file) {
            return;
        }
        let ignore = false;
        loadFile(file).then(([contents, error]) => {
            if (error) {
                captureError(error);
                setError(error.message);
                return;
            }
            if (!ignore) {
                setFileContents(contents);
            }
        });
        return () => {
            ignore = true;
        };
    }, [file]);
    const handleSelectFile = (file) => () => {
        setFile(file);
    };
    const handleSave = async (value) => {
        saveFile(file, value);
    };
    return (<div className="h-full flex flex-col">
			<ErrorMessage message={error}/>
			<div className="grid grid-cols-12 gap-6 flex-1">
				<div className="col-span-3 h-full">
					<ul>
						{fileList.map((file) => (<li key={file} onClick={handleSelectFile(file)}>
								{formatFile(file)}
							</li>))}
					</ul>
				</div>
				<div className="col-span-9 h-full">
					<Editor initialValue={fileContents} onSaveAction={handleSave}/>
				</div>
			</div>
		</div>);
}
//# sourceMappingURL=page.client.jsx.map