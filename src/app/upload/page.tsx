'use client';

import ComboButton from '@/components/atoms/ComboButton/ComboButton';
import React, {useState, useRef } from 'react';
import * as XLSX from 'xlsx';
import { db } from '@/lib/firebase'; // Firebase 초기화 파일
import { addDoc, collection, doc, setDoc } from 'firebase/firestore';  

export default function UploadPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileList, setFileList] = useState<string | null>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const uploadFileName= file.name;

    // Handle file upload logic here
    console.log('File uploaded:', file);

    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target?.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);


      const entries = (json as any[])
      .map(row => {
        const date = row['거래일'] || row['date'] || '';
        const amount = row['금액'] || row['amount'] || '';
        const store = row['가맹점명'] || row['store'] || '';
        const method = row['이용카드'] || row['method'] || '';
        return { date, amount, store, method };
      });

   // 🔥 Firestore에 저장
        await setDoc(doc(db, 'sourceData',  uploadFileName), {entries});
        setFileList(uploadFileName); // 파일명 저장
    };
    reader.readAsArrayBuffer(file); // 파일을 ArrayBuffer로 읽기
  };

  const handleButtonClick = () => {
    inputRef.current?.click();
  };

  return (
    <div>
      <h1>Upload Page</h1>
      <input
        type="file"
        id="excel-upload"
        ref={inputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <ComboButton label='Upload' onClick={handleButtonClick} />
      <p>업로드 된 파일 list</p>
      <ul>
       <li>{fileList}</li>
      </ul>
    </div>
  );
}
