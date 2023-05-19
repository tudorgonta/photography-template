// export a json object with the data from public/img
//
import { promises as fs } from 'fs'
import path from 'path'
export default function handler(req, res) {
    
    const fs = require('fs');
    const path = require('path');
    const dir = path.join(process.cwd(), 'public/img');
    const files = fs.readdirSync(dir);
    const data = files.map((file) => {
        return {
        src: `/img/${file}`,
        width: 1,
        height: 1,
        };
    });
    res.status(200).json(data);
    }
