export default function UploadPage() {
  const uploadFile = (file: File) => {
    // Handle file upload logic here
    console.log('File uploaded:', file);
    document
      .getElementById('excel-upload')
      .addEventListener('change', async (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = async (event) => {
          const data = new Uint8Array(event.target.result);
          const workbook = XLSX.read(data, { type: 'array' });

          const sheetName = workbook.SheetNames[0];
          const sheet = workbook.Sheets[sheetName];
          const json = XLSX.utils.sheet_to_json(sheet);

          // 🔎 예: 날짜/금액/가맹점만 추출 후 Firestore에 저장
          for (const row of json) {
            const entry = {
              date: row['날짜'] || row['date'], // 컬럼명에 따라 수정
              amount: row['금액'] || row['amount'],
              store: row['가맹점'] || row['store'],
              method: row['카드사'] || row['method'],
            };

            // 🔥 Firestore에 저장
            await addDoc(collection(db, 'expenses'), entry);
          }

          alert('데이터 저장 완료!');
        };

        reader.readAsArrayBuffer(file);
      });
  };
  return (
    <div>
      <h1>Upload Page</h1>
      <input type="file" id="excel-upload" />
    </div>
  );
}
