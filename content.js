/*
  ไฟล์เนื้อหาของแอป — แก้ไฟล์นี้ไฟล์เดียวเพื่อเปลี่ยนสรุปและข้อสอบ
  ------------------------------------------------------------
  โครงสร้าง: วิชา (subjects) → แต่ละวิชามี "สรุป" (summaries) และ "ข้อสอบ" (quizzes)

  วิธีเขียนเนื้อหาสรุป (text):
    - เว้นบรรทัดว่าง 1 บรรทัด = ขึ้นย่อหน้าใหม่
    - ขึ้นต้นบรรทัดด้วย "## "  = หัวข้อย่อย
    - ขึ้นต้นบรรทัดด้วย "> "   = กล่องข้อความเน้น (จุดที่ต้องจำ)
    - ขึ้นต้นบรรทัดด้วย "- "   = รายการแบบจุด
    - ครอบคำด้วย **...**      = ตัวหนา

  วิธีเขียนข้อสอบ:
    { q: "คำถาม", choices: ["ก", "ข", "ค", "ง"], answer: 0, explain: "คำอธิบาย" }
    answer คือลำดับของคำตอบที่ถูก เริ่มนับจาก 0 (ตัวเลือกแรก = 0, ตัวที่สอง = 1, ...)

  icon ที่ใช้ได้: "shield", "abc", "thai", "lotus"
*/

window.APP_CONTENT = {
  appName: "ห้องเรียนออนไลน์",

  subjects: [
    {
      id: "sassadee",
      title: "สัสดี",
      color: "#22a55b",
      icon: "shield",
      summaries: [
        {
          title: "ตัวอย่างสรุป เรื่องที่ ๑",
          text: `
> หน้านี้เป็นตัวอย่าง ใส่เนื้อหาสรุปวิชาสัสดีของจริงแทนที่ข้อความนี้

## หัวข้อย่อย

ย่อหน้าอธิบายเนื้อหา สามารถใช้**ตัวหนา**เพื่อเน้นคำสำคัญได้

- ประเด็นที่ ๑
- ประเด็นที่ ๒
- ประเด็นที่ ๓
`
        }
      ],
      // ข้อสอบวิชาสัสดี: ตัวข้อสอบทุกชุดอยู่ในไฟล์ sassadee-quiz.js
      // labels = รูปแบบเลขข้อของตัวเลือก: "kk" = ก ข ค ง, "num" = 1 2 3 4, "th" = ๑ ๒ ๓ ๔
      quizzes: [
        {"id": "sd-chud1-01", "title": "ชุดที่ ๑", "name": "สายงานสัสดี · ชุดที่ ๑", "group": "ข้อสอบสายงานสัสดี ชุดที่ ๑–๖", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-chud2-01", "title": "ชุดที่ ๒", "name": "สายงานสัสดี · ชุดที่ ๒", "group": "ข้อสอบสายงานสัสดี ชุดที่ ๑–๖", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-chud3-01", "title": "ชุดที่ ๓", "name": "สายงานสัสดี · ชุดที่ ๓", "group": "ข้อสอบสายงานสัสดี ชุดที่ ๑–๖", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-chud4-01", "title": "ชุดที่ ๔", "name": "สายงานสัสดี · ชุดที่ ๔", "group": "ข้อสอบสายงานสัสดี ชุดที่ ๑–๖", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-chud5-01", "title": "ชุดที่ ๕", "name": "สายงานสัสดี · ชุดที่ ๕", "group": "ข้อสอบสายงานสัสดี ชุดที่ ๑–๖", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-chud6-01", "title": "ชุดที่ ๖", "name": "สายงานสัสดี · ชุดที่ ๖", "group": "ข้อสอบสายงานสัสดี ชุดที่ ๑–๖", "count": 49, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-law100-01", "title": "ข้อ ๑–๕๐", "name": "กฎหมาย ๑๐๐ ข้อ · ข้อ ๑–๕๐", "group": "กฎหมายว่าด้วยการรับราชการทหาร (๑๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-law100-02", "title": "ข้อ ๕๑–๑๐๐", "name": "กฎหมาย ๑๐๐ ข้อ · ข้อ ๕๑–๑๐๐", "group": "กฎหมายว่าด้วยการรับราชการทหาร (๑๐๐ ข้อ)", "count": 46, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-prac200-01", "title": "ข้อ ๑–๕๐", "name": "ปฏิบัติหน้าที่ ๒๐๐ ข้อ · ข้อ ๑–๕๐", "group": "การปฏิบัติหน้าที่สายงานสัสดี (๒๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-prac200-02", "title": "ข้อ ๕๑–๑๐๐", "name": "ปฏิบัติหน้าที่ ๒๐๐ ข้อ · ข้อ ๕๑–๑๐๐", "group": "การปฏิบัติหน้าที่สายงานสัสดี (๒๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-prac200-03", "title": "ข้อ ๑๐๑–๑๕๐", "name": "ปฏิบัติหน้าที่ ๒๐๐ ข้อ · ข้อ ๑๐๑–๑๕๐", "group": "การปฏิบัติหน้าที่สายงานสัสดี (๒๐๐ ข้อ)", "count": 47, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-prac200-04", "title": "ข้อ ๑๕๑–๒๐๐", "name": "ปฏิบัติหน้าที่ ๒๐๐ ข้อ · ข้อ ๑๕๑–๒๐๐", "group": "การปฏิบัติหน้าที่สายงานสัสดี (๒๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p600a-01", "title": "ข้อ ๑–๕๐", "name": "๖๐๐ ข้อ ภาค ๑ · ข้อ ๑–๕๐", "group": "๖๐๐ ข้อ · ภาค ๑ กฎหมายว่าด้วยการรับราชการทหาร", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p600a-02", "title": "ข้อ ๕๑–๑๐๐", "name": "๖๐๐ ข้อ ภาค ๑ · ข้อ ๕๑–๑๐๐", "group": "๖๐๐ ข้อ · ภาค ๑ กฎหมายว่าด้วยการรับราชการทหาร", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p600a-03", "title": "ข้อ ๑๐๑–๑๕๐", "name": "๖๐๐ ข้อ ภาค ๑ · ข้อ ๑๐๑–๑๕๐", "group": "๖๐๐ ข้อ · ภาค ๑ กฎหมายว่าด้วยการรับราชการทหาร", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p600a-04", "title": "ข้อ ๑๕๑–๒๐๐", "name": "๖๐๐ ข้อ ภาค ๑ · ข้อ ๑๕๑–๒๐๐", "group": "๖๐๐ ข้อ · ภาค ๑ กฎหมายว่าด้วยการรับราชการทหาร", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p600a-05", "title": "ข้อ ๒๐๑–๒๕๐", "name": "๖๐๐ ข้อ ภาค ๑ · ข้อ ๒๐๑–๒๕๐", "group": "๖๐๐ ข้อ · ภาค ๑ กฎหมายว่าด้วยการรับราชการทหาร", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p600a-06", "title": "ข้อ ๒๕๑–๒๙๙", "name": "๖๐๐ ข้อ ภาค ๑ · ข้อ ๒๕๑–๒๙๙", "group": "๖๐๐ ข้อ · ภาค ๑ กฎหมายว่าด้วยการรับราชการทหาร", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p600b-01", "title": "ข้อ ๑–๕๐", "name": "๖๐๐ ข้อ ภาค ๒ · ข้อ ๑–๕๐", "group": "๖๐๐ ข้อ · ภาค ๒ การปฏิบัติหน้าที่ในสายงานสัสดี", "count": 49, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p600b-02", "title": "ข้อ ๕๑–๑๐๐", "name": "๖๐๐ ข้อ ภาค ๒ · ข้อ ๕๑–๑๐๐", "group": "๖๐๐ ข้อ · ภาค ๒ การปฏิบัติหน้าที่ในสายงานสัสดี", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p600b-03", "title": "ข้อ ๑๐๑–๑๕๐", "name": "๖๐๐ ข้อ ภาค ๒ · ข้อ ๑๐๑–๑๕๐", "group": "๖๐๐ ข้อ · ภาค ๒ การปฏิบัติหน้าที่ในสายงานสัสดี", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p600b-04", "title": "ข้อ ๑๕๑–๒๐๐", "name": "๖๐๐ ข้อ ภาค ๒ · ข้อ ๑๕๑–๒๐๐", "group": "๖๐๐ ข้อ · ภาค ๒ การปฏิบัติหน้าที่ในสายงานสัสดี", "count": 47, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p600b-05", "title": "ข้อ ๒๐๑–๒๕๐", "name": "๖๐๐ ข้อ ภาค ๒ · ข้อ ๒๐๑–๒๕๐", "group": "๖๐๐ ข้อ · ภาค ๒ การปฏิบัติหน้าที่ในสายงานสัสดี", "count": 50, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p600b-06", "title": "ข้อ ๒๕๑–๓๐๐", "name": "๖๐๐ ข้อ ภาค ๒ · ข้อ ๒๕๑–๓๐๐", "group": "๖๐๐ ข้อ · ภาค ๒ การปฏิบัติหน้าที่ในสายงานสัสดี", "count": 47, "file": "sassadee-quiz.js", "labels": "num"},
        {"id": "sd-p500-01", "title": "ข้อ ๑–๕๐", "name": "๕๐๐ ข้อ · ข้อ ๑–๕๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-02", "title": "ข้อ ๕๑–๑๐๐", "name": "๕๐๐ ข้อ · ข้อ ๕๑–๑๐๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 47, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-03", "title": "ข้อ ๑๐๑–๑๕๐", "name": "๕๐๐ ข้อ · ข้อ ๑๐๑–๑๕๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-04", "title": "ข้อ ๑๕๑–๒๐๐", "name": "๕๐๐ ข้อ · ข้อ ๑๕๑–๒๐๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 46, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-05", "title": "ข้อ ๒๐๑–๒๕๐", "name": "๕๐๐ ข้อ · ข้อ ๒๐๑–๒๕๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-06", "title": "ข้อ ๒๕๑–๓๐๐", "name": "๕๐๐ ข้อ · ข้อ ๒๕๑–๓๐๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-07", "title": "ข้อ ๓๐๑–๓๕๐", "name": "๕๐๐ ข้อ · ข้อ ๓๐๑–๓๕๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 47, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-08", "title": "ข้อ ๓๕๑–๔๐๐", "name": "๕๐๐ ข้อ · ข้อ ๓๕๑–๔๐๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-09", "title": "ข้อ ๔๐๑–๔๕๐", "name": "๕๐๐ ข้อ · ข้อ ๔๐๑–๔๕๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p500-10", "title": "ข้อ ๔๕๑–๕๐๐", "name": "๕๐๐ ข้อ · ข้อ ๔๕๑–๕๐๐", "group": "วิชาปฏิบัติหน้าที่สัสดี (๕๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "th"},
        {"id": "sd-p1000-01", "title": "ข้อ ๑–๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๑–๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-02", "title": "ข้อ ๕๑–๑๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๕๑–๑๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 46, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-03", "title": "ข้อ ๑๐๑–๑๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๑๐๑–๑๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-04", "title": "ข้อ ๑๕๑–๒๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๑๕๑–๒๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-05", "title": "ข้อ ๒๐๑–๒๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๒๐๑–๒๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-06", "title": "ข้อ ๒๕๑–๓๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๒๕๑–๓๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-07", "title": "ข้อ ๓๐๑–๓๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๓๐๑–๓๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-08", "title": "ข้อ ๓๕๑–๔๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๓๕๑–๔๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-09", "title": "ข้อ ๔๐๑–๔๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๔๐๑–๔๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-10", "title": "ข้อ ๔๕๑–๕๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๔๕๑–๕๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-11", "title": "ข้อ ๕๐๑–๕๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๕๐๑–๕๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-12", "title": "ข้อ ๕๕๑–๖๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๕๕๑–๖๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-13", "title": "ข้อ ๖๐๑–๖๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๖๐๑–๖๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-14", "title": "ข้อ ๖๕๑–๗๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๖๕๑–๗๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 50, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-15", "title": "ข้อ ๗๐๑–๗๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๗๐๑–๗๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 47, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-16", "title": "ข้อ ๗๕๒–๘๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๗๕๒–๘๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-17", "title": "ข้อ ๘๐๑–๘๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๘๐๑–๘๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-18", "title": "ข้อ ๘๕๑–๙๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๘๕๑–๙๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 49, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-19", "title": "ข้อ ๙๐๑–๙๕๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๙๐๑–๙๕๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "kk"},
        {"id": "sd-p1000-20", "title": "ข้อ ๙๕๑–๑๐๐๐", "name": "๑,๐๐๐ ข้อ · ข้อ ๙๕๑–๑๐๐๐", "group": "ข้อสอบวิชาการปฏิบัติหน้าที่สายงานสัสดี (๑,๐๐๐ ข้อ)", "count": 48, "file": "sassadee-quiz.js", "labels": "kk"}
      ]
    },

    {
      id: "english",
      title: "ภาษาอังกฤษ",
      color: "#5b5ff0",
      icon: "abc",
      summaries: [
{
title: "หลักการเรียน และชนิดของคำ 8 ชนิด",
text: `
!! สูตรของหนังสือ: ความเข้าใจภาษาอังกฤษมาจาก **ไวยากรณ์ 20%** + **คำศัพท์ 20%** + **การฝึกใช้จริง 60%** ดังนั้นการฝึกสำคัญที่สุด

## หลักคิดก่อนเริ่มเรียน

- ภาษาอังกฤษไม่ใช่ภาษาแม่ของเรา ==พูดผิดได้ ไม่ต้องอาย== ยิ่งกล้าใช้กับคนที่เก่งกว่าหรือเจ้าของภาษา ยิ่งได้รับการแก้ไขและเก่งเร็วขึ้น
- พาตัวเองเข้าไปอยู่ใน "บริบทภาษาอังกฤษ" (English context) ให้มากที่สุด เหมือนเด็กเรียนภาษาแม่
- ฝึกให้ครบ 4 ทักษะ: ฟัง พูด อ่าน เขียน เช่น ฟังวิทยุ ดูหนัง/ฟังเพลง พูดหน้ากระจก หรือทักทายชาวต่างชาติ

## ชนิดของคำ (Parts of Speech) มี 8 ชนิด

| ชนิดของคำ | หน้าที่ | ตัวอย่าง |
| **Noun** คำนาม | ชื่อคน สัตว์ สิ่งของ สถานที่ ทั้งที่จับต้องได้และไม่ได้ | man, dog, Bangkok, January |
| **Pronoun** คำสรรพนาม | ใช้แทนคำนาม เพื่อไม่พูดซ้ำ หรือแทนสิ่งที่ยังไม่รู้ว่าคืออะไร | I, she, they, someone, something |
| **Verb** คำกริยา | บอกการกระทำ ความเป็นอยู่ หรือสภาวะ | fly, is, seem, look |
| **Adjective** คำคุณศัพท์ | ขยาย **คำนาม/สรรพนาม** | new, ugly, happy, afraid |
| **Adverb** คำกริยาวิเศษณ์ | ขยาย **กริยา คุณศัพท์ หรือ adverb ด้วยกัน** | hard, fast, very |
| **Preposition** คำบุพบท | วางหน้าคำนาม บอกความสัมพันธ์กับคำอื่น | on, at, in, from, within |
| **Conjunction** คำสันธาน | เชื่อมคำ กลุ่มคำ หรือประโยค | and, but, so, either…or |
| **Interjection** คำอุทาน | แสดงอารมณ์ ไม่เกี่ยวกับคำอื่นในประโยค | Oh!, Wow!, Hurrah! |

> จำง่าย: **Adjective ขยายคำนาม** ส่วน **Adverb ขยายกริยา** เช่น a ==new== car (adj.) / He works ==hard== (adv.) / He is ==very== rich (adv. ขยาย adj.)

## คำเดียวกัน อาจเป็นคนละชนิด

ให้ดูที่ ==หน้าที่ของคำในประโยค== ไม่ใช่ดูที่ตัวคำอย่างเดียว

| คำ | ชนิด | ตัวอย่าง |
| work | noun | My **work** is easy. |
| work | verb | I **work** in Bangkok. |
| but | conjunction | John came **but** Mary didn't. |
| but | preposition | Everyone came **but** Mary. (= ยกเว้น) |
| well | adjective | Are you **well**? |
| well | adverb | She speaks **well**. |
| well | interjection | **Well!** That's expensive. |
`
},
{
title: "โครงสร้างประโยค: Phrase, Clause และประโยค 5 แบบ",
text: `
## ส่วนประกอบพื้นฐาน

- **Sentence (ประโยค)** = กลุ่มคำที่มีใจความสมบูรณ์ มี 2 ภาค คือ **Subject** (ภาคประธาน) + **Predicate** (ภาคแสดง) เช่น ==He== / ==lives in Bangkok.==
- **Phrase (วลี)** = กลุ่มคำที่ ==ไม่มีทั้งประธานและกริยาครบ== เช่น *In case of emergency*, push the button.
- **Clause (อนุประโยค)** = มีประธานและกริยาเหมือนประโยค แต่ต่อกับอีก clause หนึ่งเป็นประโยคเดียว เช่น Jack did not come to work / because he had a bad cold.

## ประโยค 5 รูปแบบ

| รูปแบบ | ลักษณะ | ตัวอย่าง |
| **Simple** | อนุประโยคอิสระ 1 อัน (อาจมีประธานหรือกริยามากกว่า 1 ได้) | Somchai and Thaworn play football every afternoon. |
| **Compound** | อนุประโยคอิสระ 2 อัน เชื่อมด้วย **FANBOYS** และมี **comma** หน้าตัวเชื่อม | I tried to speak English, and my friend tried to speak Thai. |
| **Complex** | อนุประโยคอิสระ 1 + อนุประโยคย่อย (dependent) ตั้งแต่ 1 อัน | The students are studying because they have a test tomorrow. |
| **Complex (Adjective clause)** | อนุประโยคย่อยทำหน้าที่ขยายคำนาม ด้วย who / whom / that / which / where | The book that Jonathan read is on the shelf. |
| **Compound-Complex** | อนุประโยคอิสระ 2 อันขึ้นไป + อนุประโยคย่อย 1 อันขึ้นไป | Since that article seems useful, we are enclosing a copy and we hope that it will help you. |

!! **FANBOYS** = ตัวเชื่อมของ Compound sentence: **F**or, **A**nd, **N**or, **B**ut, **O**r, **Y**et, **S**o

## กฎเครื่องหมาย comma ใน Complex sentence

- ถ้า ==ขึ้นต้นประโยค== ด้วยตัวเชื่อม (When, After, Because…) → **ต้องมี comma** คั่น
  *After they finished studying, Juan and Maria went to the movies.*
- ถ้าตัวเชื่อม ==อยู่กลางประโยค== → **ไม่ต้องมี comma**
  *Juan and Maria went to the movies after they finished studying.*

## ตัวเชื่อมที่ควรรู้

- ตัวเชื่อมของอนุประโยคย่อย: because, since, after, although, when
- สรรพนามเชื่อม (relative pronoun): that, who, whom, which (และ where สำหรับสถานที่)

> เคล็ดลับการอ่าน: หัวใจคือหา ==ประโยคหลัก (ประธาน + กริยาหลัก)== ให้เจอก่อน ส่วนขยายอื่นๆ ถ้าเวลาน้อยอ่านข้ามได้
`
},
{
title: "การแนะนำตัว และคำบอกคำสั่งพื้นฐาน",
text: `
## การแนะนำตัวแบบทหาร

> Good morning, ladies and gentlemen. My name is **(ยศ ชื่อ-สกุล)**. I'm **(ตำแหน่ง เช่น commander of 3rd Infantry Battalion)**, Sir!

- ใช้ **Good morning, everybody** หรือ **Hi, everybody** ในโอกาสที่เป็นกันเองมากขึ้น
- ถ้าพูดกับ ==ผู้ที่มียศสูงกว่า== ให้ลงท้ายด้วย **Sir!**

## วิธีออกคำสั่ง

- **คำบอกแบ่ง** (มีขีด -): คำหน้าลากเสียงยาว เว้นจังหวะ แล้วคำหลังเน้นหนักสั้น เช่น "ขวา - หัน"
- **คำบอกเป็นคำๆ** (มีจุลภาค ,): ออกเสียงน้ำหนักเท่ากัน เว้นจังหวะเล็กน้อย เช่น "ตามระเบียบ, พัก"

## ท่าบุคคลมือเปล่า (Without Weapons)

| ท่า | คำสั่งภาษาไทย | คำสั่งภาษาอังกฤษ |
| ท่าตรง | แถว - ตรง | **Attention!** |
| พักตามปกติ | พัก | **At Ease** |
| พักตามระเบียบ | ตามระเบียบ, พัก | **Parade, Rest** |
| พักตามสบาย | ตามสบาย, พัก | **Rest** |
| พักแถว | พักแถว | **Fall Out** |
| เลิกแถว | เลิกแถว | **Dismissed** |
| ขวาหัน / ซ้ายหัน | ขวา - หัน / ซ้าย - หัน | **Right, Face / Left, Face** |
| กลับหลังหัน | กลับหลัง - หัน | **About, Face** |
| เดินปกติ | หน้า - เดิน | **Forward, March** |
| เดินตามสบาย | เดินตามสบาย | **At Ease, March (Route Step March)** |
| หยุด | (หน่วย) แถว - หยุด | **Squad (Plt), Halt!** |
| ซอยเท้าจากการเดิน | ซอย - เท้า | **Mark Time, March** |
| เปลี่ยนเท้า | เปลี่ยน, เท้า | **Change Step, March** |
| ก้าวทางขวา / ซ้าย / ถอยหลัง | ก้าวทางขวา…ก้าว, ทำ | **Right Step / Left Step / Backward, March** |
| เดินครึ่งก้าว | ครึ่งก้าว, เดิน | **Half Step, March** |
| เดินเฉียงขวา / ซ้าย | เฉียงขวา, ทำ | **Right / Left Oblique, March** |
| เลี้ยวขวา / ซ้าย (ทั้งแถว) | ทางขวา, หน้าเดิน | **Column Right / Left, March** |

## ท่าบุคคลมีอาวุธ (With Weapons)

| ท่า | คำสั่งภาษาไทย | คำสั่งภาษาอังกฤษ |
| วันทยาวุธ | ตรงหน้า, ระวัง, วันทยา - วุธ | **Present, Arms** (หรือ Rifle, Salute) |
| เลิกแสดงความเคารพ | เรียบ - อาวุธ | **Order, Arms** |
| เฉียงอาวุธ | เฉียง, อาวุธ | **Port, Arms** |
| แบกอาวุธ | แบก, อาวุธ | **Shoulder, Arms** |
| สะพายอาวุธ | สะพายอาวุธ | **Sling, Arms** |
| ตรวจอาวุธ | ตรวจ, อาวุธ | **Inspection, Arms** |
| ติดดาบ / ปลดดาบ | ติดดาบ / ปลดดาบ | **Fix, Bayonets / Unfix, Bayonets** |

## แถวชิด (Formations)

| การปฏิบัติ | คำสั่งภาษาอังกฤษ |
| หน้ากระดานแถวเดี่ยว มาหาข้าพเจ้า | **Fall In** |
| หน้ากระดาน 2 แถว | **2 Ranks, Fall In** |
| จัดแถว / ทางขวาเป็นหลัก จัดแถว | **Right, Dress / Dress Right, Dress** |
| นิ่ง (เลิกจัดแถว) | **Ready, Front** |
| เปิดระยะ / ปิดระยะ | **Extend, March / Close, March** |
| แถวตอนเรียงหนึ่ง | **File, Fall In** |
| แถวตอนเรียงสอง / สาม | **2 Columns / 3 Columns, Fall In** |

## การรายงาน

> "Company, Attention, Present, Arms" แล้วรายงานว่า **"Sir, … Company is prepared for inspection."**
> กองทหารเกียรติยศ: **"Sir, the Honor Guard is prepared for inspection."**
`
},
{
title: "การอ่านตัวเลขและตัวอักษรทางทหาร",
text: `
!! ในการสื่อสารทางวิทยุ ต้องอ่านตัวเลขและตัวอักษรตามแบบมาตรฐาน เพื่อไม่ให้ฟังผิด

## การอ่านตัวเลข (Numerical Pronunciation)

| เลข | อ่านว่า | เลข | อ่านว่า |
| 0 | **ZE-RO** (ซี-โร่ว) | 5 | **FIFE** (ฟายฟ์) |
| 1 | **WUN** (วัน) | 6 | **SIX** (ซิกซ์) |
| 2 | **TOO** (ทู) | 7 | **SEV-EN** (เซ-เว่น) |
| 3 | **TREE** (ทรี) | 8 | **AIT** (เอ็ท) |
| 4 | **FOW-ER** (โฟ-เออร์) | 9 | **NIN-ER** (ไน-เนอร์) |

> สังเกต: ==3 = TREE, 5 = FIFE, 9 = NINER== ต่างจากการอ่านปกติ เพื่อไม่ให้สับสนเวลาฟังผ่านวิทยุ

## ตัวอักษร (Phonetic Alphabet)

| อักษร | คำ | อักษร | คำ |
| A | **Alpha** (อัล-ฟ่า) | N | **November** (โน-เวม-เบอร์) |
| B | **Bravo** (บรา-โว่) | O | **Oscar** (ออส-ก้า) |
| C | **Charlie** (ชา-ลี) | P | **Papa** (ปา-ป้า) |
| D | **Delta** (เดล-ต้า) | Q | **Quebec** (เค-เบ็ค) |
| E | **Echo** (เอ็ค-โค่) | R | **Romeo** (โร-มี-โอ) |
| F | **Foxtrot** (ฟอกซ์-ทร็อต) | S | **Sierra** (เซีย-ร่า) |
| G | **Golf** (กอล์ฟ) | T | **Tango** (แทง-โก้) |
| H | **Hotel** (โฮ-เทล) | U | **Uniform** (ยู-นิ-ฟอร์ม) |
| I | **India** (อิน-เดีย) | V | **Victor** (วิค-เต้อร์) |
| J | **Juliet** (จู-เลียต) | W | **Whiskey** (วิส-กี้) |
| K | **Kilo** (กิ-โล) | X | **X-ray** (เอ็กซ์-เรย์) |
| L | **Lima** (ลี-ม่า) | Y | **Yankee** (แยง-กี้) |
| M | **Mike** (ไมค์) | Z | **Zulu** (ซู-ลู) |
`
},
{
title: "ยศทหาร ไทย–สหรัฐฯ",
text: `
## ยศนายทหารสัญญาบัตร ทหารบก (Commissioned Officer)

| ยศไทย | คำย่อ | ภาษาอังกฤษ (ไทย) | ยศเทียบ สหรัฐฯ |
| จอมพล | – | Field Marshal | General of the Army (GA) *ใช้ยามสงครามเท่านั้น* |
| พลเอก | พล.อ. | General (GEN) | General (GEN) |
| พลโท | พล.ท. | Lieutenant General (LTG) | Lieutenant General (LTG) |
| พลตรี | พล.ต. | Major General (MG) | Major General (MG) |
| พันเอก (พิเศษ) | พ.อ.(พิเศษ) | Senior Colonel (SR.COL) | Brigadier General (BG) |
| พันเอก | พ.อ. | Colonel (COL) | Colonel (COL) |
| พันโท | พ.ท. | Lieutenant Colonel (LTC) | Lieutenant Colonel (LTC) |
| พันตรี | พ.ต. | Major (MAJ) | Major (MAJ) |
| ร้อยเอก | ร.อ. | Captain (CPT) | Captain (CPT) |
| ร้อยโท | ร.ท. | First Lieutenant (1LT) | First Lieutenant (1LT) |
| ร้อยตรี | ร.ต. | Second Lieutenant (2LT) | Second Lieutenant (2LT) |

> **พันเอก (พิเศษ)** เป็นชั้นเงินเดือน เทียบเท่า **พลจัตวา / Brigadier General** ของสหรัฐฯ
> **ว่าที่…** (ใส่หน้ายศ) = **Acting** หรือ **Provisional**

## ยศนายทหารประทวน ทหารบก (NCO)

| ยศไทย | คำย่อ | ภาษาอังกฤษ |
| จ่าสิบเอก | จ.ส.อ. | Master Sergeant First Class (1MSGT) |
| จ่าสิบโท | จ.ส.ท. | Master Sergeant Second Class (2MSGT) |
| จ่าสิบตรี | จ.ส.ต. | Master Sergeant Third Class (3MSGT) |
| สิบเอก | ส.อ. | Sergeant (SGT) |
| สิบโท | ส.ท. | Corporal (CPL) |
| สิบตรี | ส.ต. | Lance Corporal (LCPL) |
| สิบตรีกองประจำการ | ส.ต.ฯ | Private First Class (PFC) |
| พลทหาร | พลฯ | Private (PVT) |

> ระดับชั้นของสหรัฐฯ: นายทหารใช้รหัส **O-1 ถึง O-10** (O-1 = Second Lieutenant, O-10 = General) ส่วนนายทหารประทวนใช้ **E-1 ถึง E-9** (E-9 สูงสุด เช่น Sergeant Major, Command Sergeant Major)

## ยศทหารเรือ (นายทหารสัญญาบัตร)

| ยศไทย | ภาษาอังกฤษ |
| พลเรือเอก (พล.ร.อ.) | Admiral (ADM) |
| พลเรือโท (พล.ร.ท.) | Vice Admiral (VADM) |
| พลเรือตรี (พล.ร.ต.) | Rear Admiral (RADM) |
| นาวาเอก (น.อ.) | Captain (CAPT) |
| นาวาโท (น.ท.) | Commander (CDR) |
| นาวาตรี (น.ต.) | Lieutenant Commander (LCDR) |
| เรือเอก (ร.อ.) | Lieutenant (LT) |
| เรือโท (ร.ท.) | Lieutenant Junior Grade (LTJG) |
| เรือตรี (ร.ต.) | Sub-Lieutenant (สหรัฐฯ = Ensign) |

!! ระวังจุดที่ออกสอบบ่อย: **Captain** ของทหารบก = ร้อยเอก แต่ **Captain** ของทหารเรือ = ==นาวาเอก==

## ยศทหารอากาศ (นายทหารสัญญาบัตร)

| ยศไทย | ภาษาอังกฤษ |
| พลอากาศเอก | Air Chief Marshal |
| พลอากาศโท | Air Marshal |
| พลอากาศตรี | Air Vice Marshal |
| นาวาอากาศเอก | Group Captain |
| นาวาอากาศโท | Wing Commander |
| นาวาอากาศตรี | Squadron Leader |
| เรืออากาศเอก | Flight Lieutenant |
| เรืออากาศโท | Flying Officer |
| เรืออากาศตรี | Pilot Officer |

## ยศตำรวจ (ตัวอย่าง)

พลตำรวจเอก = **Police General (Pol.Gen.)**, พันตำรวจเอก = **Police Colonel (Pol.Col.)**, ร้อยตำรวจเอก = **Police Captain (Pol.Capt.)** หลักคือเติม **Police** หน้ายศแบบทหารบก
`
},
{
title: "เหล่าทหาร และชื่อหน่วยงาน",
text: `
## เหล่าทหารบกไทย มี 17 เหล่า (Royal Thai Army Corps)

| กลุ่ม | เหล่า | ภาษาอังกฤษ |
| **เหล่ารบ** (Combat) | ทหารราบ (ร.) | Infantry |
|  | ทหารม้า (ม.) | Cavalry |
| **เหล่าสนับสนุนการรบ** (Combat Support) | ทหารปืนใหญ่ (ป.) | Artillery |
|  | ทหารช่าง (ช.) | Engineer |
|  | ทหารสื่อสาร (ส.) | Signal |
|  | การข่าว (ขว.) | Intelligence |
| **เหล่าช่วยรบ** (Combat Service Support) | ทหารพลาธิการ (พธ.) | Quartermaster |
|  | ทหารการเงิน (กง.) | Finance |
|  | ทหารพระธรรมนูญ (ธน.) | Judge Advocate General's Corps |
|  | ทหารขนส่ง (ขส.) | Transportation |
|  | ทหารสรรพาวุธ (สพ.) | Ordnance |
|  | ทหารสารวัตร (สห.) | Military Police |
|  | ทหารสารบรรณ (สบ.) | Adjutant General |
|  | ทหารแพทย์ (พ.) | Medical |
|  | ทหารแผนที่ (ผท.) | Survey (แผนที่) |
|  | ทหารการสัตว์ (กส.) | Veterinary |
|  | ทหารดุริยางค์ (ดย.) | Band |

> **ทหารเรือ** มี 4 พรรค 24 เหล่า (พรรคนาวิน, พรรคกลิน, พรรคนาวิกโยธิน, พรรคพิเศษ) ส่วน **ทหารอากาศ** มี 23 เหล่า เช่น นักบิน (Pilot), ต้นหน (Navigator), อากาศโยธิน (Ground Security Force)

## ชื่อหน่วยงานทั่วไป (General Units)

| ไทย | ภาษาอังกฤษ |
| กระทรวง | Ministry (สหรัฐฯ ใช้ Department เช่น กห. = MOD / DOD) |
| สำนักงาน (ทหาร) | Office |
| กรม (ฝ่ายอำนวยการ) | Directorate |
| เจ้ากรม | Director / Chief / Commanding General |
| รองเจ้ากรม | Deputy Director |
| กอง | Division |
| ผู้อำนวยการกอง | Director |
| แผนก | Section / Branch |

> ข้อคิดเล็กๆ จากหนังสือ (A Short Course in Human Relations): คำที่สำคัญที่สุดคำเดียวคือ **"WE"** และคำที่สำคัญน้อยที่สุดคือ **"I"**
`
},
{
title: "ศัพท์การฝึก เอกสาร และคำสั่งทางทหาร",
text: `
## ชั้นความลับ และ ความเร่งด่วน

| ชั้นความลับ | ภาษาอังกฤษ |
| ปกปิด | **Restricted** |
| ลับ | **Confidential (C)** |
| ลับมาก | **Secret (S)** |
| ลับที่สุด | **Top Secret** |

| ความเร่งด่วน | ภาษาอังกฤษ |
| ปกติ | **Routine (R)** |
| ด่วน | **Priority (P)** |
| ด่วนมาก | **Immediate (O)** |
| ด่วนที่สุด | **Flash (Z)** |

!! จำลำดับ: Restricted < Confidential < Secret < ==Top Secret== และ Routine < Priority < Immediate < ==Flash==

## การบรรยายสรุป (Military Briefing)

- บรรยายสรุปข่าวสาร = **Information Briefing**
- บรรยายสรุปเพื่อตกลงใจ = **Decision Briefing**
- บรรยายสรุปของฝ่ายอำนวยการ = **Staff Briefing**
- บรรยายสรุปภารกิจ = **Mission Briefing**
- ผู้บรรยาย = Briefer, ผู้ฟัง = Audience, ไม้ชี้ = Pointer

## การฝึก (Training)

| ไทย | ภาษาอังกฤษ |
| การฝึกกายบริหาร | Physical Training (**PT**) |
| การฝึกแก้ปัญหาบนแผนที่ | Map Exercise (**MAPEX**) |
| การฝึกที่บังคับการ | Command Post Exercise (**CPX**) |
| การฝึกตามสถานการณ์ | Situational Training Exercise (**STX**) |
| การฝึกทางยุทธวิธีโดยไม่ใช้กำลังทหาร | Tactical Exercise Without Troops (**TEWT**) |
| การฝึกร่วมและผสม | Combined and Joint Training Exercise (**CJTX**) |
| การฝึกเดินทางไกล | Road March Training |
| การฝึกจำลองยุทธ | Battle Simulation Exercise |
| คู่มือราชการสนาม (รส.) | Field Manual (**FM**) |
| คู่มือทางเทคนิค (คท.) | Technical Manual (**TM**) |
| เครื่องช่วยฝึก | Training Aids |
| เครื่องช่วยฝึกยิงด้วยเลเซอร์ | **MILES** (Multiple Integrated Laser Engagement Simulation) |
| ตารางการฝึก | Training Schedule |
| ศูนย์ฝึก | Training Center |

## คำสั่งและเอกสารทางทหาร

| ไทย | ภาษาอังกฤษ |
| ข้อบังคับทหารบก | Army Regulation (**AR**) |
| คำสั่งการรบ | Combat Order |
| คำสั่งยุทธการ | Operations Order (**OPORD**) |
| แผนยุทธการ | Operations Plan (**OPLAN**) |
| คำสั่งเตือน | Warning Order (**WO / WARNO**) |
| คำสั่งเป็นส่วนๆ | Fragmentary Order (**FRAGO**) |
| สาส์นยุทธการ | Letter of Instruction (**LOI**) |
| ระเบียบปฏิบัติประจำ (รปจ.) | Standing Operating Procedure (**SOP**) |
| บันทึกความเข้าใจ | Memorandum of Understanding (**MOU**) |
| บันทึกข้อตกลง | Memorandum of Agreement (**MOA**) |
| ปีงบประมาณ | Fiscal Year (**FY**) |
| แผ่นบริวาร | Overlay |
| ผนวก ก / อนุผนวก 1 | Annex A / Appendix 1 |
| กระบวนการแสวงข้อตกลงใจทางทหาร | Military Decision Making Process (**MDMP**) |
`
},
{
title: "คำสั่งการรบ: คำสั่งเตือน และคำสั่งยุทธการ 5 ข้อ",
text: `
## หลักทั่วไป

- ผู้บังคับหมวดและหน่วยที่ต่ำกว่า ==ให้คำสั่งด้วยวาจา== หลีกเลี่ยงคำสั่งยาวและซับซ้อน
- ใช้ **SOP** ช่วยให้ปฏิบัติได้เร็ว แต่ห้ามให้เป็นรูปแบบตายตัวที่ข้าศึกคาดเดาได้

## คำสั่งเตือน (Warning Order)

!! วัตถุประสงค์: ==แจ้งล่วงหน้า== ให้หน่วยรองมีเวลาเตรียมตัว ควร **สั้น แต่ครบถ้วน**

1. **Situation** สถานการณ์โดยย่อ
2. **Mission** ภารกิจ
3. **General Instructions** คำแนะนำทั่วไป เช่น การจัดเฉพาะกิจ เครื่องแต่งกายและยุทโธปกรณ์ อาวุธพิเศษ และ **ตารางเวลาขั้นต้น** (Tentative time schedule) ได้แก่ เวลาเคลื่อนย้ายเร็วที่สุด, เวลาและสถานที่ให้คำสั่งยุทธการ, เวลาปฏิบัติที่คาดไว้, เวลาตรวจ และเวลาซักซ้อม

## คำสั่งยุทธการ (OPORD) ใช้รูปแบบ 5 ข้อ

| ข้อ | หัวข้อ | สาระสำคัญ |
| 1 | **SITUATION** สถานการณ์ | ฝ่ายข้าศึก (Enemy Forces), ฝ่ายเรา (Friendly Forces), หน่วยสมทบและหน่วยแยก (Attachments and Detachments) |
| 2 | **MISSION** ภารกิจ | ข้อความกะทัดรัดชัดเจน ตอบ ==ใคร ทำอะไร เมื่อไร ที่ไหน ทำไม== (who, what, when, where, why) |
| 3 | **EXECUTION** การปฏิบัติ | เจตนารมณ์ผู้บังคับหน่วย (Intent), แนวความคิดในการปฏิบัติ (Concept of Operation: Maneuver, Fires), กิจของหน่วยรอง, กองหนุน, คำแนะนำในการประสาน |
| 4 | **SERVICE SUPPORT** การช่วยรบ | ที่ตั้งขบวนสัมภาระรบ (Combat trains), สิ่งอุปกรณ์และบริการ, ที่รักษาพยาบาล (Aid Station) |
| 5 | **COMMAND AND SIGNAL** การบังคับบัญชาและการสื่อสาร | ที่ตั้งที่บังคับการ/ผู้บังคับหน่วย, สายการบังคับบัญชา, ความถี่ นามเรียกขาน สัญญาณ ถามตอบ (challenge and password) |

> จำง่าย: **S-M-E-S-C** = Situation, Mission, Execution, Service Support, Command & Signal
> ปิดท้ายคำสั่งด้วย **ACKNOWLEDGE** (การตอบรับ) และอาจมี **Annexes** (ผนวก) เช่น ผนวก ก การข่าว, ผนวก ข แผ่นบริวารยุทธการ

## คำสั่งเป็นส่วนๆ (FRAGO)

ใช้เมื่อ ==ไม่มีเวลาพอให้คำสั่งยุทธการเต็มรูปแบบ== หรือต้องการแก้ไขคำสั่งเดิม ใช้รูปแบบเดียวกับ OPORD แต่ **กล่าวเฉพาะส่วนที่เปลี่ยนแปลง**

## ศัพท์ในคำสั่งที่ควรรู้

| ไทย | ภาษาอังกฤษ |
| กลยุทธ์ | maneuver |
| กองหนุน | reserve |
| การยิงสนับสนุน | fire support |
| การปฏิบัติหลัก | main effort |
| ผู้ตรวจการณ์หน้า | forward observer |
| พนักงานวิทยุโทรศัพท์ | RATELO |
| เจ้าหน้าที่เสนารักษ์ | medic |
| ที่ตั้งขบวนสัมภาระรบ | combat trains' location |
| ฝ่ายข้าศึก / ฝ่ายเรา | enemy forces / friendly forces |
`
},
{
title: "ศัพท์อาวุธ ยุทโธปกรณ์ และการช่วยรบ",
text: `
## ยุทธภัณฑ์ประจำตัว

| ไทย | ภาษาอังกฤษ |
| กระติกน้ำ / ถุงใส่กระติก | canteen / canteen cover |
| กระเป๋ากระสุน | ammunition pouch |
| เป้สนาม | rucksack |
| เปลสนาม | jungle hammock |
| ผ้าคลุมกันฝน (ปอนโช) | poncho |
| พลั่วสนาม | entrenching tool |
| ไฟฉายหัวงอ | crookneck flashlight |
| ชุดปฐมพยาบาล | first aid kit |
| เครื่องหาพิกัดด้วยดาวเทียม | GPS |
| เสื้อเกราะกันกระสุน | body armor / bullet-resisting vest |
| หน้ากากป้องกันไอพิษ | gas mask / protective mask |
| ซองปืน | holster |

## อาวุธ

| ไทย | ภาษาอังกฤษ |
| ปืนเล็กยาว (ปลย.) | rifle |
| ปืนพกลูกโม่ | revolver |
| เครื่องยิงลูกระเบิด (ค.) | mortar |
| เครื่องยิงลูกระเบิดจากปืนเล็กยาว | grenade launcher |
| ปืนใหญ่วิถีโค้ง (ปค.) | howitzer |
| ปืนใหญ่ต่อสู้อากาศยาน (ปตอ.) | Antiaircraft Artillery (AAA) |
| อาวุธต่อสู้รถถังขนาดเบา | Light Antiarmor Weapon (LAW) |
| อาวุธนำวิถีต่อสู้รถถัง | Antitank Guided Missile (ATGM) |
| จรวดหลายลำกล้อง | Multiple Launch Rocket System (MLRS) |
| รถถังหลัก | Main Battle Tank (MBT) |
| รถสายพานลำเลียงพล (รสพ.) | Armored Personnel Carrier (APC) |
| รถรบทหารราบ | Infantry Fighting Vehicle (IFV) |
| เรือพิฆาต / เรือลาดตระเวน | destroyer / cruiser |
| เรือบรรทุกเครื่องบิน | aircraft carrier |

## งานกำลังพล (Combat Service Support)

| ไทย | ภาษาอังกฤษ |
| การขาดราชการ | Absent Without Leave (**AWOL**) |
| การช่วยราชการ | Temporary Duty (**TDY**) |
| การเลื่อนยศ / การลดยศ | promotion / demotion |
| การลาประจำปี / ลาป่วย / ลาฉุกเฉิน | annual / convalescent / emergency leave |
| การลาออก / การไล่ออก | resignation / dismissal |

## สิ่งอุปกรณ์ 10 ประเภท (สป.)

| สป. | Class | ประเภท |
| สป.1 | Class I | อาหาร (Subsistence) |
| สป.2 | Class II | เครื่องแต่งกาย ยุทธภัณฑ์ส่วนบุคคล เครื่องมือ |
| สป.3 | Class III | น้ำมันเชื้อเพลิงและหล่อลื่น (POL) |
| สป.4 | Class IV | วัสดุก่อสร้าง |
| สป.5 | Class V | ==กระสุนและวัตถุระเบิด== (Ammunition) |
| สป.6 | Class VI | สิ่งของความต้องการส่วนบุคคล |
| สป.7 | Class VII | ยุทโธปกรณ์หลัก (Major end items) เช่น ยานพาหนะ |
| สป.8 | Class VIII | สิ่งอุปกรณ์สายแพทย์ |
| สป.9 | Class IX | ชิ้นส่วนซ่อม (Repair parts) |
| สป.10 | Class X | สิ่งอุปกรณ์สำหรับงานที่ไม่ใช่ทางทหาร |

## สถานที่ในค่ายทหาร

**Camp** = ค่ายกึ่งถาวร, **Fort** = ค่ายถาวร (เช่น ค่ายสุรสีห์ = Fort Surasri), **main gate** ประตูใหญ่, **mess hall** โรงเลี้ยง, **parade ground** ลานสวนสนาม, **motor pool** แหล่งรวมรถ, **latrine** ห้องส้วม, **day room** ห้องพักผ่อนกองร้อย, **obstacle course** สนามทดสอบกำลังใจ
`
},
{
title: "การสอบภาษาอังกฤษสำหรับกำลังพล",
text: `
!! ข้อมูลบทนี้อ้างตามหนังสือ (พิมพ์ พ.ศ. 2555) รูปแบบและคะแนนของข้อสอบบางชนิดอาจเปลี่ยนไปแล้ว ควรตรวจสอบกับผู้จัดสอบก่อนสอบจริง

## การสอบแบ่งตามวัตถุประสงค์ได้ 3 ประเภท

| ประเภท | ตัวอย่าง |
| 1. เพื่อเรียนต่อระดับอุดมศึกษาในต่างประเทศ | **TOEFL, IELTS** |
| 2. เพื่อคัดเลือกรับทุน/ดูงานในวงการทหาร | **ECL, ALCPT** (สหรัฐฯ) และ **ADFELPS** (ออสเตรเลีย) |
| 3. เพื่อวัดความสามารถในการสื่อสาร/ทำงาน | **TOEIC** |

## TOEFL (Test of English as a Foreign Language)

- ข้อสอบแนว ==อเมริกัน== จัดโดย **ETS** (Educational Testing Service) สหรัฐฯ
- ใช้สมัครเรียนต่อปริญญาตรี โท เอก มหาวิทยาลัยกว่า 4,400 แห่งยอมรับ
- เป็น **Proficiency Test** (วัดความสามารถที่มีอยู่) ไม่ใช่ Achievement Test (วัดผลการเรียน)
- ตามหนังสือ แบบใช้คอมพิวเตอร์มีภาคฟัง โครงสร้าง อ่าน และเขียนเรียงความ 250–300 คำใน 30 นาที

## IELTS (International English Language Testing System)

- พัฒนาโดย ==University of Cambridge, British Council และ IDP (ออสเตรเลีย)==
- สอบครบ **4 ทักษะ**: ฟัง พูด อ่าน เขียน
- **ฟัง** 4 ตอน 40 ข้อ (ตอน 1–2 ชีวิตประจำวัน, ตอน 3–4 การศึกษา)
- **อ่าน** 3 บทความ 40 ข้อ 60 นาที เลือกแบบ **Academic** (เรียนมหาวิทยาลัย) หรือ **General Training**
- **เขียน** 60 นาที 2 Task
- **พูด** สัมภาษณ์ตัวต่อตัวกับผู้คุมสอบ
- คะแนน **Band 1–9**

## ECL และ ALCPT (สหรัฐฯ)

- **ECL** (English Comprehension Level) วัด ==การฟังและการอ่าน== ใช้คัดเลือกผู้ไปเรียนหลักสูตรทหารสหรัฐฯ ตามโครงการ **IMET**
- จัดทำโดย **DLIELC** (Defense Language Institute English Language Center) ในไทยดำเนินการผ่าน **JUSMAG**
- **ALCPT** เป็นข้อสอบปรนัย ฟังและอ่าน ใช้คัดเลือกผู้รับทุนต่างประเทศของกระทรวงกลาโหมไทยมานาน
- บางหลักสูตร (เช่น นักบิน) ต้องสอบสัมภาษณ์ **OPI** (Oral Proficiency Interview) เพิ่ม

## ADFELPS (ออสเตรเลีย)

- **Australian Defence Force English Language Profiling System** ใช้คัดเลือกผู้ไปเรียนหลักสูตรทหารออสเตรเลีย (โครงการ Defence Co-operation Program)
- ลักษณะคล้าย IELTS วัด 4 ทักษะ แต่เนื้อหาเกี่ยวกับ ==งานทหาร==
- หลักสูตรส่วนใหญ่ต้องการระดับ **7 ขึ้นไป**
- เกณฑ์ประเมินการพูด: โครงสร้างประโยค (Syntax), คำศัพท์ (Lexicon), การสื่อสารอย่างมีประสิทธิภาพ, ความคล่องแคล่ว (Fluency), การออกเสียง

## TOEIC

**Test of English for International Communication** วัดภาษาอังกฤษเพื่อการสื่อสารในชีวิตประจำวันและการทำงาน
`
},
{
title: "วิธีฝึกภาษาอังกฤษด้วยตนเอง",
text: `
!! การเรียนภาษา ==ไม่มีทางลัด (No short cut)== ทำได้ดีด้วยการ **ฝึก ฝึก และฝึก**

## ลำดับการพัฒนา

1. **Accuracy** สร้างประโยคที่ถูกต้องเพื่อสื่อความหมาย
2. **Fluency** พัฒนาเป็นความคล่องในการสื่อสาร
3. สะสมจนเป็นความสามารถในการใช้ภาษาอย่างเป็นธรรมชาติ

## ฝึกฟัง

- ต้องมีพื้นฐานไวยากรณ์และคำศัพท์ก่อน
- เทคนิค ==ดูหนัง 3 รอบ==
  - รอบ 1 เปิดเสียงพากย์ไทย เพื่อเข้าใจเรื่อง
  - รอบ 2 เสียงอังกฤษ + คำบรรยายอังกฤษ
  - รอบ 3 เสียงอังกฤษอย่างเดียว
- ฟังเพลงพร้อมอ่านเนื้อ แล้วจดประโยคที่ชอบไว้ใช้พูดหรือเขียน

## ฝึกพูด

- พูดหน้ากระจก อัดเสียงตัวเองแล้วฟังแก้ไข
- ทักทายชาวต่างชาติ ("พจนานุกรมเดินได้") ความกล้าสำคัญกว่าความเก่ง

## ฝึกอ่านและเขียน

- หัวใจของการอ่านและเขียน คือ **Main Idea / Thesis Statement**
- Essay มี 3 ส่วน:

| ส่วน | สิ่งที่เขียน |
| **Introduction** | เริ่มจากเรื่องทั่วไป แล้วแคบลงสู่ **Thesis statement** (ประเด็นหลัก) |
| **Body** | ย่อหน้าละ 1 ประเด็น: **Topic sentence** + ตัวอย่างสนับสนุน 1–2 ตัวอย่าง |
| **Conclusion** | สรุปโดยเรียบเรียง Introduction ใหม่ด้วยคำของตัวเอง |
`
},
{
title: "เทคนิคทำข้อสอบ ADFELPS และ IELTS",
text: `
## ADFELPS แต่ละภาค

- **ฟัง**: ฟัง ==2 รอบ== มี 5 เรื่อง เช่น ฝากข้อความทางโทรศัพท์ (ชื่อ ยศ เหล่าทัพ เบอร์โทร), บทสนทนา, การบรรยายสรุป, รายการวิทยุเรื่องทางทหาร ถ้าตอบเรื่องที่ 1–3 ได้เกือบหมด จะได้ประมาณระดับ 6
- **อ่าน**: ไม่เกิน 60 นาที 5 ส่วน เริ่มจากหาข้อมูลมาเติม ตอบสั้น จับคู่ จนถึงอ่านจับใจความหลัก (ยากที่สุด)
- **เขียน**: 2 เรื่องใน 60 นาที แต่ละเรื่องเลือกได้ระหว่าง **เรื่องทั่วไป** หรือ **เรื่องทหาร**
- **พูด**: 5 ขั้นตอน ขั้นท้ายต้องเลือกบัตรหัวข้อแล้วแสดงความคิดเห็น ==ประเมินที่การใช้ภาษา ไม่ใช่ความรู้ในหัวข้อ==

## IELTS: รู้เขารู้เรา

- ในไทยสอบ ฟัง อ่าน เขียน ช่วงเช้า (ประมาณ 09.00–12.00) และสอบพูดช่วงบ่าย
- ไปถึงสนามสอบก่อนเวลา ==อย่างน้อย 45 นาที==

### เทคนิคการฟัง

- ใช้เวลาช่วงแนะนำการสอบ (1–2 นาที) ==อ่านคำถามล่วงหน้า== และเดาว่าช่องว่างควรเป็นคำชนิดใด (noun, verb, ตัวเลข, วันที่, จำนวนเงิน)
- อย่ารีบตอบสิ่งที่ได้ยินครั้งแรก ผู้พูดมัก **เปลี่ยนคำพูดหรือแก้ไข** ภายหลัง
- ระวังการบอกเวลาแบบอ้อม เช่น quarter to seven = 6.45

### เทคนิคการอ่าน

1. อ่านย่อหน้าแรกทั้งย่อหน้าเพื่อหา **main idea**
2. ย่อหน้าอื่นอ่านเฉพาะ **ประโยคแรก** (มักเป็น topic sentence)
3. ข้อ True / False / Not Given: เจอในเรื่องและยืนยันได้ → True หรือ False, ==หาไม่เจอ → Not Given==
4. !! อ่านคำสั่งให้ดี ถ้าโจทย์ให้ตอบ **True/False** อย่าเขียน Yes/No (และกลับกัน)
5. เติมคำ: ใช้ keyword ในคำถามจับคู่กับเนื้อเรื่อง แล้วอ่านรอบๆ อย่างน้อย 3 ประโยค

### เทคนิคการเขียน

- **Task 1** บรรยายกราฟ แผนภูมิ ตาราง หรือแผนภาพ
- **Task 2** เรียงความแสดงความคิดเห็น 2–3 ประเด็นพร้อมเหตุผล ==คะแนน Task 2 : Task 1 = 2 : 1==
- เกณฑ์: Task Achievement, Coherence & Cohesion, Lexical Resource, Grammatical Range & Accuracy

| ความหมาย | คำที่ใช้บรรยายกราฟ |
| เพิ่มขึ้น | increase, rise, jump, grow |
| ลดลง | decrease, fall, drop, decline |
| คงที่ | level off, remain the same |
| มาก | dramatically, sharply, noticeably, enormously |
| น้อย | slightly, moderately, minimally |
| แนวโน้ม | upward, downward, fluctuate between, hover around |
| เปรียบเทียบ | twice as much as, more than threefold |

| หน้าที่ | คำเชื่อมใน Essay |
| เปิดประเด็น | Firstly, To begin with, On the one hand |
| ให้เหตุผล | This is because, This is due to |
| ยกตัวอย่าง | For example, For instance, To illustrate the point |
| ผลที่ตามมา | As a result, Therefore, Thus |
| สรุป | To sum up, In a nutshell |

### เทคนิคการพูด

- ตอบคำถามแนะนำตัวให้ ==สั้นและตรง== เช่น ถามชื่อ ตอบเฉพาะชื่อ-นามสกุล ไม่ต้องใส่ยศ
- เตรียมประโยคเปิดดีๆ 1–2 ประโยค แล้วพูดต่อเนื่องเป็นประเด็น: เปิดหัวข้อ → สนับสนุน → สรุป
- ฝึกอัดเสียงตัวเอง แล้วแก้จุดอ่อนที่พบบ่อย: **"เอ่อ…อืม…"**, พูดซ้ำวน, เงียบนาน, ไวยากรณ์ผิด
`
}
],
      quizzes: [
        {"id": "en-01-1", "title": "ชุดที่ ๑ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 49, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-01-2", "title": "ชุดที่ ๑ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 50, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-02-1", "title": "ชุดที่ ๒ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๒ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 48, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-02-2", "title": "ชุดที่ ๒ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๒ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 50, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-03", "title": "ชุดที่ ๓", "name": "แนวข้อสอบ · ชุดที่ ๓", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 15, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-04", "title": "ชุดที่ ๔", "name": "แนวข้อสอบ · ชุดที่ ๔", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 21, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-05", "title": "ชุดที่ ๕", "name": "แนวข้อสอบ · ชุดที่ ๕", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 20, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-06", "title": "ชุดที่ ๖", "name": "แนวข้อสอบ · ชุดที่ ๖", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 25, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-07", "title": "ชุดที่ ๗", "name": "แนวข้อสอบ · ชุดที่ ๗", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 22, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-08", "title": "ชุดที่ ๘", "name": "แนวข้อสอบ · ชุดที่ ๘", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 26, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-09", "title": "ชุดที่ ๙", "name": "แนวข้อสอบ · ชุดที่ ๙", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 36, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-10-1", "title": "ชุดที่ ๑๐ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๐ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 50, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-10-2", "title": "ชุดที่ ๑๐ · ข้อ ๕๑–๙๑", "name": "แนวข้อสอบ · ชุดที่ ๑๐ · ข้อ ๕๑–๙๑", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 21, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-11-1", "title": "ชุดที่ ๑๑ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๑ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 50, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-11-2", "title": "ชุดที่ ๑๑ · ข้อ ๕๑–๙๙", "name": "แนวข้อสอบ · ชุดที่ ๑๑ · ข้อ ๕๑–๙๙", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 42, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-12-1", "title": "ชุดที่ ๑๒ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๒ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 50, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-12-2", "title": "ชุดที่ ๑๒ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๒ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 48, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-13-1", "title": "ชุดที่ ๑๓ · ข้อ ๑–๔๙", "name": "แนวข้อสอบ · ชุดที่ ๑๓ · ข้อ ๑–๔๙", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 48, "file": "english-quiz.js", "labels": "num"},
        {"id": "en-13-2", "title": "ชุดที่ ๑๓ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๓ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาอังกฤษ ๑,๓๐๐ ข้อ", "count": 42, "file": "english-quiz.js", "labels": "num"}
      ]
    },

    {
      id: "thai",
      title: "ภาษาไทย",
      color: "#ff6b3d",
      icon: "thai",
      summaries: [
{
title: "ความรู้เบื้องต้นเกี่ยวกับหลักภาษาไทย",
text: `
!! ตำราหลักภาษาไทยของ **พระยาอุปกิตศิลปสาร** แบ่งหลักภาษาไทยเป็น ==4 ส่วน== คือ อักขรวิธี วจีวิภาค วากยสัมพันธ์ และฉันทลักษณ์

## ความหมายของ "หลักภาษา" และ "ไวยากรณ์"

- **หลักภาษา** = คำประสมของ "หลัก" (คำไทย) + "ภาษา" (คำสันสกฤต)
- **ไวยากรณ์** มาจากบาลี *เวยฺยากรณ* / สันสกฤต *วฺยากรณ* แปลว่า การทำให้แจ้ง การอธิบาย หมายถึงวิชาว่าด้วยรูปคำและระเบียบการประกอบคำเป็นประโยค
- ตำรา **สยามไวยากรณ์** เรียบเรียงโดยพระยาอุปกิตศิลปสาร (พ.ศ. 2461–2480) ภายหลังเปลี่ยนชื่อเป็น **หลักภาษาไทย**

## ขอบข่ายของหลักภาษาไทย 4 ส่วน

| ส่วน | ความหมาย | เนื้อหาหลัก |
| **อักขรวิธี** | วิธีเขียนอักษรให้ถูกต้อง | รูปสระ พยัญชนะ วรรณยุกต์, ไตรยางศ์, อักษรควบ อักษรนำ, คำเป็นคำตาย, การใช้ ไอ ใอ, ณ น, ศ ษ ส |
| **วจีวิภาค** | การจำแนกถ้อยคำ | ลักษณะคำไทย คำมูล คำประสม, คำบาลีสันสกฤต คำสมาส, ชนิดของคำ 7 ชนิด, ราชาศัพท์ |
| **วากยสัมพันธ์** | ความสัมพันธ์ของถ้อยคำ | วลี, ประโยค, ชนิดของประโยค, การสัมพันธ์ประโยค |
| **ฉันทลักษณ์** | ลักษณะคำประพันธ์ | กฎการแต่ง กาพย์ กลอน โคลง ฉันท์ ร่าย |

> จำง่าย: **อักขร**(ตัวอักษร) → **วจี**(คำ) → **วากย**(ประโยค) → **ฉันท**(คำประพันธ์) เรียงจากหน่วยเล็กไปหน่วยใหญ่

## ภาษาบาลี–สันสกฤต (ออกสอบบ่อย)

| | บาลี | สันสกฤต |
| สระ | **8 ตัว** อะ อา อิ อี อุ อู เอ โอ | **14 ตัว** เพิ่ม ไอ เอา ฤ ฤๅ ฦ ฦๅ |
| พยัญชนะ | **33 ตัว** | **35 ตัว** เพิ่ม ==ศ ษ== |

## ธรรมชาติของภาษา

1. **ภาษาใช้เสียงสื่อความหมาย** ความสัมพันธ์ของเสียงกับความหมายขึ้นอยู่กับ ==การตกลงกันของแต่ละกลุ่ม== (ยกเว้นคำเลียนเสียงธรรมชาติ)
2. **หน่วยในภาษาประกอบกันเป็นหน่วยที่ใหญ่ขึ้น** สลับที่คำแล้วได้ความหมายใหม่ เช่น ใครไปหาให้ / หาใครไปให้ / ให้ใครไปหา
3. **ภาษามีการเปลี่ยนแปลง** สาเหตุ เช่น การพูดในชีวิตประจำวัน การกลมกลืนเสียง อิทธิพลภาษาอื่น การเรียนภาษาของเด็ก
4. **ภาษามีลักษณะที่เหมือนกันและแตกต่างกัน** ทุกภาษามีเสียงสระ เสียงพยัญชนะ มีการสร้างคำ แต่บางลักษณะมีเฉพาะบางภาษา

!! **เสียงวรรณยุกต์** เป็น ==ลักษณะเฉพาะของภาษาไทย== ไม่ใช่ลักษณะทั่วไปของทุกภาษา (ออกสอบบ่อย)
`
},
{
title: "เสียงในภาษาไทย: สระ พยัญชนะ วรรณยุกต์ พยางค์",
text: `
!! ตัวเลขที่ต้องจำ: **สระ 21 รูป 32 เสียง** · **พยัญชนะ 44 รูป 21 เสียง** · **วรรณยุกต์ 4 รูป 5 เสียง**

## เสียงสระ

| ประเภท | จำนวน | ตัวอย่าง |
| **สระเดี่ยว (สระแท้)** | 18 เสียง (สั้น 9 ยาว 9) | อะ–อา, อิ–อี, อึ–อือ, อุ–อู, เอะ–เอ, แอะ–แอ, โอะ–โอ, เอาะ–ออ, เออะ–เออ |
| **สระประสม** | 6 เสียง | เอียะ–เอีย, เอือะ–เอือ, อัวะ–อัว |
| **สระเกิน** | 8 เสียง | ==อำ ใอ ไอ เอา ฤ ฤๅ ฦ ฦๅ== |

- เสียงสั้น–ยาวทำให้ความหมายต่างกัน เช่น มิด–มีด, เข็ด–เขต, หด–โหด
- **สระเกิน** มีเสียงพยัญชนะประสมอยู่แล้ว (อำ = อะ+ม, ไอ = อะ+ย, เอา = อะ+ว) จึง ==มีตัวสะกดซ้ำอีกไม่ได้==

## เสียงพยัญชนะ

- พยัญชนะ **44 รูป** แต่มีเพียง **21 เสียง** เพราะหลายรูปออกเสียงเดียวกัน เช่น /ท/ = ฑ ท ธ ฒ ฐ ถ, /ส/ = ซ ศ ษ ส
- แบ่งตามฐานที่เกิดเสียง (ตามแบบบาลี)

| ฐาน | ชื่อ | วรรค |
| คอ | กัณฐชะ | วรรค ก: ก ข ฃ ค ฅ ฆ ง |
| เพดาน | ตาลุชะ | วรรค จ: จ ฉ ช ซ ฌ ญ |
| ปุ่มเหงือก | มุทธชะ | วรรค ฎ: ฎ ฏ ฐ ฑ ฒ ณ |
| ฟัน | ทันตชะ | วรรค ด: ด ต ถ ท ธ น |
| ริมฝีปาก | โอฐชะ | วรรค บ: บ ป ผ ฝ พ ฟ ภ ม |
| ไม่เป็นวรรค | เศษวรรค (อวรรค) | ย ร ล ว ศ ษ ส ห ฬ อ ฮ |

## มาตราตัวสะกด 8 มาตรา

| คำตาย (สะกดเสียงสั้น หยุดทันที) | คำเป็น |
| **แม่กก** (ก ข ค ฆ) เช่น นก เมฆ | **แม่กง** (ง) เช่น ทอง |
| **แม่กด** (ด จ ช ซ ฎ ฏ ฐ ฑ ฒ ต ถ ท ธ ศ ษ ส) เช่น อาจ ราช กฎ | **แม่กน** (น ญ ณ ร ล ฬ) เช่น การ ผล บุญ |
| **แม่กบ** (บ ป พ ฟ ภ) เช่น ลาภ ภาพ | **แม่กม** (ม) / **แม่เกย** (ย) / **แม่เกอว** (ว) |

> แม่ ก กา = พยางค์ที่ไม่มีตัวสะกด

## เสียงวรรณยุกต์

- **รูป 4 รูป**: ไม้เอก ( ่ ) ไม้โท ( ้ ) ไม้ตรี ( ๊ ) ไม้จัตวา ( ๋ )
- **เสียง 5 เสียง**: สามัญ เอก โท ตรี จัตวา
- ==รูปกับเสียงไม่จำเป็นต้องตรงกัน== เช่น "ค่า" รูปเอก แต่ออกเสียงโท

## พยางค์

- พยางค์ประกอบด้วย ==พยัญชนะต้น + สระ + วรรณยุกต์== เป็นอย่างน้อย อาจมี **ตัวสะกด** และ **ตัวการันต์**
- **พยางค์เปิด** = ไม่มีตัวสะกด เช่น มา ดู · **พยางค์ปิด** = มีตัวสะกด เช่น นก ทอง (สระ อำ ไอ ใอ เอา นับเป็นพยางค์ปิด เพราะมีเสียงท้ายในตัว)
- **สระเสียงประสม** ที่ออกสอบบ่อย: เอีย เอือ อัว เช่น เปลี่ยน (เอีย) เปลือง (เอือ)
`
},
{
title: "ไตรยางศ์ การผันวรรณยุกต์ และการสร้างคำ",
text: `
## ไตรยางศ์ (อักษร 3 หมู่)

| หมู่ | จำนวน | ตัวอักษร | ประโยคช่วยจำ |
| **อักษรกลาง** | 9 ตัว | ก จ ฎ ฏ ด ต บ ป อ | ==ไก่ จิก เด็ก ตาย บน ปาก โอ่ง== |
| **อักษรสูง** | 11 ตัว | ข ฃ ฉ ฐ ถ ผ ฝ ศ ษ ส ห | ==ผี ฝาก ถุง ข้าว สาร ให้ ฉัน== |
| **อักษรต่ำคู่** | 14 ตัว | ค ฅ ฆ ช ซ ฌ ฑ ฒ ท ธ พ ฟ ภ ฮ | มีคู่เสียงในอักษรสูง |
| **อักษรต่ำเดี่ยว** | 10 ตัว | ง ญ ณ น ม ย ร ล ว ฬ | ==งู ใหญ่ นอน อยู่ ณ ริม วัด โม ฬี โลก== |

## คำเป็น – คำตาย

- **คำเป็น** = สระเสียงยาวไม่มีตัวสะกด (กา มี) · สะกดแม่ **กง กน กม เกย เกอว** · หรือประสมสระ **อำ ไอ ใอ เอา**
- **คำตาย** = สระเสียงสั้นไม่มีตัวสะกด (จะ ติ) · สะกดแม่ **กก กด กบ**

!! จำง่าย: คำตายคือคำที่ออกเสียงแล้ว ==หยุดสั้น ลากเสียงต่อไม่ได้==

## การผันวรรณยุกต์

| หมู่ / ชนิดคำ | พื้นเสียง | ผันได้ |
| กลาง คำเป็น | สามัญ | ครบ 5 เสียง: กา ก่า ก้า ก๊า ก๋า |
| กลาง คำตาย | เอก | โท ตรี จัตวา (ใช้ ้ ๊ ๋) |
| สูง คำเป็น | จัตวา | ่ = เอก, ้ = โท เช่น ขา ข่า ข้า |
| สูง คำตาย | เอก | ้ = โท เช่น ขาด ข้าด |
| ต่ำ คำเป็น | สามัญ | ่ = **โท**, ้ = **ตรี** เช่น คา ค่า ค้า |
| ต่ำ คำตาย สระสั้น | ตรี | ่ = โท เช่น คะ ค่ะ |
| ต่ำ คำตาย สระยาว | โท | ้ = ตรี เช่น คาด ค้าด |

> **อักษรคู่** (ต่ำคู่ + สูง) ผันร่วมกันได้ครบ 5 เสียง เช่น คา ข่า ค่า ค้า ขา

## อักษรควบ

- **ควบแท้**: ร ล ว ควบกับพยัญชนะต้น ออกเสียงทั้งสองตัว เช่น ==กราบ ปลา ขวาน พร้อม==
- **ควบไม่แท้**: ออกเสียงตัวหน้าตัวเดียว เช่น จริง ศรี สร้าง (ไม่ออกเสียง ร) หรือ ==ทร ออกเสียงเป็น ซ== เช่น ทราย ทรง ทราบ
- ควบกล้ำที่มาจากภาษาต่างประเทศ เช่น ทร (จันทรา) บร (เบรก) ฟร (ฟรี)

## อักษรนำ

- **ห นำอักษรต่ำเดี่ยว** ออกเสียงตาม ห (สูง) เช่น หงอ หญ้า หนู หมา หยุด หรือ หลาน หวาน
- **อ นำ ย** มี 4 คำ: ==อย่า อยู่ อย่าง อยาก==
- **อักษรสูง/กลางนำอักษรต่ำเดี่ยว** พยางค์หลังออกเสียงตามตัวนำ เช่น ขนม (ขะ-หนม) ตลาด (ตะ-หลาด) สนิม

## ระบบการสร้างคำ

| ชนิด | ลักษณะ | ตัวอย่าง |
| **คำมูล** | คำดั้งเดิม แยกไม่ได้ | พ่อ แม่ นาฬิกา |
| **คำประสม** | คำมูลรวมกัน ==เกิดความหมายใหม่== | ลูกน้ำ แม่น้ำ ช่างทอง นักเขียน |
| **คำซ้อน** | คำความหมายเหมือน/ใกล้/ตรงข้ามมาซ้อนกัน | บ้านเรือน เสื่อสาด ผิดชอบ |
| **คำซ้ำ** | คำเดียวกันซ้ำ ใช้ไม้ยมก ๆ | เด็กๆ ดีๆ ไปๆ มาๆ |
| **คำสมาส** | ==บาลี/สันสกฤต + บาลี/สันสกฤต== คำหลักอยู่หลัง แปลจากหลังไปหน้า | ราชการ วิทยาศาสตร์ อักษรศาสตร์ |
| **คำสมาสแบบสนธิ** | กลมกลืนเสียงระหว่างคำ | วิทยา+อาลัย = **วิทยาลัย**, ราช+อุปโภค = **ราชูปโภค**, นร+อิศวร = **นเรศวร** |

!! **คำสมาส** ต้องเป็น ==คำบาลีหรือสันสกฤตทั้งคู่== ถ้ามีคำไทยปนเป็น **คำประสม** เช่น ราชวัง (วัง เป็นคำไทย) และอ่านเชื่อมเสียงระหว่างคำ เช่น อักษรศาสตร์ อ่าน อัก-สอน-ระ-สาด
`
},
{
title: "ชนิดของคำในภาษาไทย 7 ชนิด",
text: `
!! จำแนกตามพระยาอุปกิตศิลปสาร: ==นาม สรรพนาม กริยา วิเศษณ์ บุพบท สันธาน อุทาน==

## 1. คำนาม (5 ชนิด)

| ชนิด | ความหมาย | ตัวอย่าง |
| สามานยนาม | ชื่อทั่วไป | คน แมว บ้าน |
| วิสามานยนาม | ชื่อเฉพาะ | สมชาย เชียงใหม่ |
| สมุหนาม | นามรวมหมู่ | ฝูง คณะ กอง ==สงฆ์ (พระ 4 รูปขึ้นไป)== |
| ลักษณนาม | บอกลักษณะของนาม | ตัว อัน ด้าม เล่ม รูป องค์ |
| อาการนาม | นามที่มี **การ / ความ** นำหน้า | การเดิน ความดี |

> **การ** นำหน้ากริยา (การกิน) · **ความ** นำหน้ากริยาที่เกี่ยวกับจิตใจหรือคุณศัพท์ (ความรัก ความสวย)

## 2. คำสรรพนาม (6 ชนิด)

| ชนิด | หน้าที่ | ตัวอย่าง |
| บุรุษสรรพนาม | แทนผู้พูด ผู้ฟัง ผู้ถูกกล่าวถึง | ฉัน คุณ เขา |
| ประพันธสรรพนาม | เชื่อมประโยค แทนนามข้างหน้า | ==ที่ ซึ่ง อัน== |
| นิยมสรรพนาม | ชี้เฉพาะ | นี่ นั่น โน่น |
| อนิยมสรรพนาม | ไม่ชี้เฉพาะ (ไม่ใช่คำถาม) | ใคร อะไร ไหน (เช่น ใครก็ได้) |
| ปฤจฉาสรรพนาม | ใช้ถาม | ใคร อะไร ไหน (ในประโยคคำถาม) |
| วิภาคสรรพนาม | แบ่งแยก | ต่าง บ้าง กัน |

## 3. คำกริยา (5 ชนิด)

- **อกรรมกริยา** ไม่ต้องมีกรรม เช่น นอน เดิน
- **สกรรมกริยา** ต้องมีกรรม เช่น กิน (ข้าว) อ่าน (หนังสือ)
- **วิกตรรถกริยา** ต้องมีคำมาเติมความ เช่น ==เป็น เหมือน คล้าย คือ เท่า==
- **กริยานุเคราะห์ (กริยาช่วย)** เช่น จะ กำลัง ได้ แล้ว ถูก ควร
- **กริยาสภาวมาลา** กริยาที่ทำหน้าที่เป็นนาม เช่น ==นอน==หลับเป็นการพักผ่อน

## 4. คำวิเศษณ์ (10 ชนิด)

ลักษณวิเศษณ์ (สี รส กลิ่น ขนาด) · กาลวิเศษณ์ (เช้า เย็น) · สถานวิเศษณ์ (ใกล้ ไกล) · ประมาณวิเศษณ์ (มาก น้อย) · นิยมวิเศษณ์ (นี้ นั้น) · อนิยมวิเศษณ์ (ใด ไหน) · ปฤจฉาวิเศษณ์ (ใด อะไร ใช้ถาม) · ประติชญาวิเศษณ์ (==ขานรับ== ครับ ค่ะ ขา) · ประติเษธวิเศษณ์ (==ปฏิเสธ== ไม่ มิ) · ประพันธวิเศษณ์ (ที่ ซึ่ง อย่างที่ เชื่อมความ)

!! **ที่ ซึ่ง อัน** ถ้า ==ตามหลังคำนาม== เป็น **ประพันธสรรพนาม** แต่ถ้า ==ตามหลังกริยาหรือวิเศษณ์== เป็น **ประพันธวิเศษณ์**

## 5. คำบุพบท

นำหน้านาม สรรพนาม หรือกริยา บอกความสัมพันธ์ เช่น ใน บน ของ แก่ แด่ ต่อ โดย กับ สำหรับ

> **แก่** ใช้กับผู้รับทั่วไป · **แด่** ใช้กับผู้ที่เคารพ เช่น มอบรางวัลแก่นักเรียน / ถวายแด่พระสงฆ์

## 6. คำสันธาน (4 ชนิด)

| ชนิด | คำ |
| เชื่อมความคล้อยตาม | และ แล้ว ทั้ง…และ ครั้น…จึง |
| เชื่อมความขัดแย้ง | แต่ แต่ทว่า กว่า…ก็ |
| เชื่อมความให้เลือก | หรือ หรือไม่ก็ ไม่…ก็ |
| เชื่อมความเป็นเหตุผล | เพราะ จึง เพราะฉะนั้น ฉะนั้น |

## 7. คำอุทาน

- **อุทานบอกอาการ** แสดงอารมณ์ เช่น โอ๊ย ว้าย เฮ้ย
- **อุทานเสริมบท** เติมเพื่อความสละสลวย เช่น หนังสือหนังหา กินข้าวกินปลา
`
},
{
title: "วลีและประโยค",
text: `
## วลี (กลุ่มคำ)

กลุ่มคำที่ ==ยังไม่ครบเป็นประโยค== แบ่งตามหน้าที่ได้ เช่น
- **นามวลี** บ้านหลังใหญ่
- **กริยาวลี** กำลังเดินทาง
- **บุพบทวลี** บนโต๊ะ ในห้องเรียน
- **วิเศษณ์วลี** อย่างรวดเร็ว

## ส่วนประกอบของประโยค

ประโยค = **ภาคประธาน** + **ภาคแสดง** (กริยา และอาจมีกรรม/ส่วนขยาย)

## ชนิดของประโยคตามโครงสร้าง (3 ชนิด)

| ชนิด | ชื่อเดิม | ลักษณะ | ตัวอย่าง |
| **ประโยคความเดียว** | เอกรรถประโยค | ภาคแสดงเดียว ใจความเดียว | นักเรียนอ่านหนังสือ |
| **ประโยคความรวม** | อเนกรรถประโยค | ประโยคความเดียว 2 ประโยคขึ้นไป เชื่อมด้วย ==สันธาน== | พี่ไปโรงเรียน **แต่** น้องอยู่บ้าน |
| **ประโยคความซ้อน** | สังกรประโยค | ==มุขยประโยค== (ใจความหลัก) + ==อนุประโยค== (ส่วนขยาย) | คนที่ทำความดี ย่อมมีความสุข |

### ประโยคความรวม 4 แบบ (ตามสันธาน)

คล้อยตาม (และ) · ขัดแย้ง (แต่) · ให้เลือก (หรือ) · เป็นเหตุผล (เพราะ…จึง)

### อนุประโยค 3 ชนิด (ในประโยคความซ้อน)

| ชนิด | หน้าที่ | ตัวอย่าง |
| **นามานุประโยค** | ทำหน้าที่แทนนาม (เป็นประธาน/กรรม) | ==เขาเป็นคนดี== เป็นที่รู้กันทั่วไป |
| **คุณานุประโยค** | ขยายนาม ขึ้นต้นด้วย ที่ ซึ่ง อัน | คน==ที่ยืนอยู่==เป็นครู |
| **วิเศษณานุประโยค** | ขยายกริยาหรือวิเศษณ์ | เขาวิ่ง==เมื่อฝนตก== |

## ประโยคตามเจตนาของผู้ส่งสาร

บอกเล่า · ปฏิเสธ · คำถาม · คำสั่ง/ขอร้อง/ชักชวน

## ประโยคตามการเน้น

| ชนิด | เน้น | ตัวอย่าง |
| ประโยคกรรตุ | ประธาน (ผู้ทำ) | ตำรวจจับผู้ร้าย |
| ประโยคกรรม | กรรม (ผู้ถูกกระทำ) | ผู้ร้ายถูกตำรวจจับ |
| ประโยคกริยา | กริยา (กริยาขึ้นต้น) | ==เกิด==เหตุไฟไหม้ |
| ประโยคการิต | ผู้ใช้ให้ทำ | แม่**ให้**ลูกล้างจาน |
| ประโยคกริยาสภาวมาลา | กริยาเป็นประธาน | ==ออกกำลังกาย==ทำให้ร่างกายแข็งแรง |

!! ประโยคที่ ==ขาดภาคแสดง== (มีแต่นามวลียาวๆ) ไม่เป็นประโยคสมบูรณ์ เช่น ข้อความโฆษณา "น้ำมันเครื่องสูตรสังเคราะห์เพื่อปิคอัพสมรรถนะสูง"
`
},
{
title: "ราชาศัพท์",
text: `
!! ราชาศัพท์ใช้กับบุคคล 5 ระดับ: ==พระมหากษัตริย์ · พระราชวงศ์ · พระภิกษุสงฆ์ · ข้าราชการ · สุภาพชน==

## หลักการใช้คำว่า "ทรง"

- **ทรง + คำนามสามัญ** → เป็นกริยาราชาศัพท์ เช่น ทรงม้า ทรงดนตรี ทรงบาตร
- **ทรง + คำกริยาสามัญ** เช่น ทรงยินดี ทรงฟัง ทรงวิ่ง
- **ทรง + คำนามราชาศัพท์** เช่น ทรงพระกรุณา ทรงพระราชดำริ
- ==ห้ามใช้ "ทรง" นำหน้ากริยาที่เป็นราชาศัพท์อยู่แล้ว== เช่น "ทรงเสด็จ" "ทรงเสวย" "ทรงประทับ" ใช้ผิด ให้ใช้ เสด็จ เสวย ประทับ ได้เลย

## คำนำหน้านามราชาศัพท์

| คำนำหน้า | ใช้กับ | ตัวอย่าง |
| **พระบรม / พระบรมราช** | สิ่งสำคัญของพระมหากษัตริย์ | พระบรมราโชวาท พระบรมราชโองการ พระบรมฉายาลักษณ์ |
| **พระราช** | สิ่งรองลงมาของพระมหากษัตริย์ | พระราชดำรัส พระราชดำริ พระราชหัตถเลขา |
| **พระ** | อวัยวะ ของใช้ | พระหัตถ์ พระเนตร พระแท่น |
| **ต้น** | สัตว์และของใช้ส่วนพระองค์ | ช้างต้น เครื่องต้น |

## คำราชาศัพท์ที่ใช้บ่อย

| คำสามัญ | ราชาศัพท์ (พระมหากษัตริย์) |
| กิน | เสวย |
| นอน | บรรทม |
| อาบน้ำ | สรง |
| ป่วย | ประชวร |
| ตาย | ==สวรรคต== |
| ดู | ทอดพระเนตร |
| ฟัง | ทรงสดับ |
| พูด | ตรัส · คำพูด = พระราชดำรัส |
| ไป | เสด็จพระราชดำเนิน |
| นั่ง / อยู่ | ประทับ |
| สั่ง | มีพระบรมราชโองการ / มีพระราชดำรัสสั่ง |
| ให้ (ของ) | พระราชทาน |
| ลูก | พระราชโอรส / พระราชธิดา |

## ราชาศัพท์สำหรับพระภิกษุสงฆ์

| คำสามัญ | ใช้กับพระภิกษุ |
| กิน | ฉัน |
| นอน | จำวัด |
| อาบน้ำ | สรงน้ำ |
| ป่วย | อาพาธ |
| ตาย | ==มรณภาพ== |
| เชิญ | นิมนต์ |
| ให้ (ของ) | ถวาย · ส่งของให้ถึงมือ = ประเคน |
| บ้าน/ที่พัก | กุฏิ |

## การพูดกับพระมหากษัตริย์

- ขึ้นต้น: **ขอเดชะฝ่าละอองธุลีพระบาทปกเกล้าปกกระหม่อม**
- สรรพนามแทนตัว: **ข้าพระพุทธเจ้า** · แทนพระองค์: **ใต้ฝ่าละอองธุลีพระบาท**
- ลงท้าย: **ด้วยเกล้าด้วยกระหม่อม** (ขอเดชะ)
- เมื่อผู้พูดรับคำ: พระพุทธเจ้าข้า ขอรับใส่เกล้าใส่กระหม่อม

## ข้อสังเกตที่ออกสอบบ่อย

- ใช้ **ถวายการต้อนรับ** และ **เฝ้าฯ รับเสด็จ** (= เฝ้าทูลละอองธุลีพระบาทรับเสด็จ)
- **สวรรคต** ใช้กับพระมหากษัตริย์และสมเด็จพระราชินี · **สิ้นพระชนม์** ใช้กับเจ้านายชั้นรองลงมา
`
},
{
title: "การเขียนคำไทยให้ถูกต้อง",
text: `
## หลักการสังเกตคำไทยแท้

- ส่วนมากเป็นคำ ==พยางค์เดียว== และสะกดตรงตามมาตรา เช่น กิน นอน พ่อ แม่
- คำไทยแท้ ==ไม่ใช้== ฆ ฌ ญ ฎ ฏ ฐ ฑ ฒ ณ ธ ภ ศ ษ ฬ (มีข้อยกเว้นไม่กี่คำ เช่น ฆ่า ระฆัง เฆี่ยน ศอก ศึก เศิก)
- ไม่มีตัวการันต์ และใช้ ไอ (ไม้มลาย) เป็นส่วนใหญ่

## การใช้ ใอ (ไม้ม้วน) มี 20 คำ

> ผู้ใหญ่หาผ้าใหม่ ให้สะใภ้ใช้คล้องคอ ใฝ่ใจเอาใส่ห่อ มิหลงใหลใครขอดู จะใคร่ลงเรือใบ ดูน้ำใสและปลาปู สิ่งใดอยู่ในตู้ มิใช่อยู่ใต้ตั่งเตียง บ้าใบ้ถือใยบัว หูตามัวมาใกล้เคียง เล่าท่องอย่าละเลี่ยง ยี่สิบม้วนจำจงดี

คำที่ใช้ไม้ม้วน: ใหญ่ ใหม่ ให้ สะใภ้ ใช้ ใฝ่ ใจ ใส่ หลงใหล ใคร่ ใบ ใส ใด ใน มิใช่ ใต้ ใบ้ ใย ใกล้ ใคร

## คำที่มักเขียนผิด

| เขียนถูก | ไม่ใช่ |
| กะทันหัน | กระทันหัน |
| กะเพรา | กระเพรา |
| เกล็ดปลา / ==เกร็ด==ความรู้ | สลับกัน |
| จลาจล | จราจล |
| ทะนุถนอม | ทนุถนอม |
| บิณฑบาต | บิณฑบาตร |
| ปรากฏ | ปรากฎ |
| ผลุบๆ โผล่ๆ · ผลุดลุกผลุดนั่ง | ผุบๆ · ผุดลุกผุดนั่ง |
| พิสดาร | พิศดาร |
| ลายเซ็น | ลายเซ็นต์ |
| สังเกต | สังเกตุ |
| อนุญาต | อนุญาติ |
| อานิสงส์ | อานิสงค์ |
| ศีรษะ | ศรีษะ |
| สัปดาห์ | สัปดาร์ |
| โอกาส | โอกาศ |
| ไอศกรีม | ไอศครีม |
| จัตุรัส · จัตุสดมภ์ | จัตุรัด · จัตุสดม |
| ปรักหักพัง · ปรัมปรา · ปรามาส | ปลักหักพัง |

## การ / กาล / การณ์ / กาญจน์

| คำ | ความหมาย | ตัวอย่าง |
| **การ** | งาน กิจ | โครงการ ราชการ รักษาการ (ทำหน้าที่แทน) |
| **การณ์** | เหตุ เรื่องราว | เหตุการณ์ ==สังเกตการณ์== ==รักษาการณ์ (อยู่เวรยาม)== |
| **กาล** | เวลา | กาลเวลา ปัจจุบันกาล |

!! **รักษาการ** = ทำหน้าที่แทนตำแหน่ง · **รักษาการณ์** = เฝ้ายาม (ออกสอบบ่อย)

## หลักทั่วไปที่ควรจำ

- ใช้ ==พจนานุกรมฉบับราชบัณฑิตยสถาน== เป็นหลักในการตรวจตัวสะกด
- คำทับศัพท์ ไม่ต้องใส่วรรณยุกต์ตามเสียงอ่าน เช่น ==คอมพิวเตอร์ เทคโนโลยี== (ไม่ใช่ ค็อมพิ้วเต้อร์)
`
},
{
title: "โวหาร ภาพพจน์ สำนวน และรสในวรรณคดี",
text: `
## โวหาร 5 ชนิด

| โวหาร | ใช้เพื่อ |
| **บรรยายโวหาร** | เล่าเรื่อง เหตุการณ์ ตามลำดับ ==เน้นความชัดเจน== |
| **พรรณนาโวหาร** | ให้ผู้อ่าน ==เห็นภาพ เกิดอารมณ์== |
| **เทศนาโวหาร** | สั่งสอน ชี้แจงให้เห็นคุณโทษ |
| **สาธกโวหาร** | ==ยกตัวอย่าง== หรือนิทานประกอบ |
| **อุปมาโวหาร** | เปรียบเทียบให้เข้าใจง่าย |

## ภาพพจน์ (โวหารภาพลักษณ์)

| ภาพพจน์ | ลักษณะ | ตัวอย่าง |
| **อุปมา** | เปรียบสิ่งหนึ่ง ==เหมือน== อีกสิ่ง ใช้คำ เหมือน ดุจ ราว ดัง เฉก ปาน | ใจดำ==ดุจ==อีกา |
| **อุปลักษณ์** | เปรียบว่า ==เป็น / คือ== อีกสิ่งโดยตรง | ครู==คือ==เรือจ้าง |
| **บุคคลวัต (บุคลาธิษฐาน)** | ให้สิ่งไม่มีชีวิตทำกิริยาอย่างคน | ลม==กระซิบ== ดวงดาว==ยิ้ม== |
| **อติพจน์** | กล่าว==เกินจริง== | คิดถึงใจจะขาด |
| **อวพจน์** | กล่าว==น้อยกว่าจริง== | รอสักอึดใจ |
| **สัทพจน์** | ==เลียนเสียง==ธรรมชาติ | ชะนีร้องโหวยโวยโว่ย · ปืนดังปัง |
| **นามนัย** | ใช้ส่วนหนึ่งแทนทั้งหมด | เก้าอี้ (แทนตำแหน่ง) |
| **สัญลักษณ์** | ใช้สิ่งหนึ่งแทนความหมาย | ดอกมะลิ = แม่ · หงส์ = ผู้สูงศักดิ์ |
| **ปฏิพากย์ (ปฏิทรรศน์)** | ใช้คำขัดแย้งกัน | ยิ่งรีบยิ่งช้า · ความเงียบที่ดังที่สุด |

!! แยก **อุปมา** (มีคำว่า เหมือน ดุจ ดั่ง ราว เฉก) กับ **อุปลักษณ์** (ใช้ ==คือ เป็น== หรือเปรียบตรงๆ ไม่มีคำเชื่อม)

## สุภาษิต · สำนวน · คำพังเพย

- **สุภาษิต** = คำกล่าวที่ ==สั่งสอน== เช่น ความพยายามอยู่ที่ไหน ความสำเร็จอยู่ที่นั่น
- **สำนวน** = ถ้อยคำที่มีความหมาย ==ไม่ตรงตามตัวอักษร== เช่น หน้าซื่อใจคด
- **คำพังเพย** = ถ้อยคำ ==เปรียบเปรยติชม== สถานการณ์ เช่น รำไม่ดีโทษปี่โทษกลอง

## รสในวรรณคดีไทย 4 รส

| รส | ความหมาย |
| **เสาวรจนี** | ==ชมความงาม== (บทชมโฉม ชมบ้านเมือง) |
| **นารีปราโมทย์** | ==เกี้ยวพาราสี== พรอดรัก |
| **พิโรธวาทัง** | ==โกรธ ตัดพ้อ== ประชดประชัน |
| **สัลลาปังคพิสัย** | ==โศกเศร้า== คร่ำครวญ |
`
},
{
title: "คำประพันธ์และฉันทลักษณ์",
text: `
!! คำประพันธ์ไทยหลัก 5 ชนิด: ==โคลง ฉันท์ กาพย์ กลอน ร่าย== และ **ลิลิต** = ร่าย + โคลง แต่งสลับกัน

## ศัพท์ที่ต้องรู้

- **คณะ** = แบบแผนจำนวนคำ บาท วรรค
- **สัมผัส** = คำคล้องจอง มี **สัมผัสสระ** (ใช้สระและตัวสะกดเดียวกัน) และ **สัมผัสอักษร** (พยัญชนะต้นเสียงเดียวกัน)
- **สัมผัสนอก** = สัมผัสบังคับระหว่างวรรค · **สัมผัสใน** = สัมผัสภายในวรรค ช่วยให้ไพเราะ
- **คำเอก** = คำมีรูปวรรณยุกต์เอก (และคำตายใช้แทนได้) · **คำโท** = คำมีรูปวรรณยุกต์โท
- **ครุ** = พยางค์เสียงหนัก (สระเสียงยาว หรือมีตัวสะกด หรือ อำ ไอ ใอ เอา) · **ลหุ** = พยางค์เสียงเบา (==สระเสียงสั้นไม่มีตัวสะกด==)

## กลอนสุภาพ (กลอนแปด)

- 1 บท = 2 บาท = ==4 วรรค== คือ **วรรคสดับ · วรรครับ · วรรครอง · วรรคส่ง**
- วรรคละ 8 คำ (อนุโลม 7–9)
- **สัมผัสบังคับ**: ท้ายวรรคสดับ → คำที่ 3 (หรือ 5) ของวรรครับ · ท้ายวรรครับ → ท้ายวรรครอง · ท้ายวรรครอง → คำที่ 3 (หรือ 5) ของวรรคส่ง · **ระหว่างบท**: ท้ายวรรคส่ง → ท้ายวรรครับของบทถัดไป

| วรรค | เสียงท้ายวรรคที่นิยม |
| สดับ | ได้ทุกเสียง (นิยมไม่ใช้สามัญ) |
| รับ | ==นิยมเสียงจัตวา== ไม่นิยมสามัญและตรี |
| รอง | ==นิยมสามัญหรือตรี== ไม่ใช้เอก โท จัตวา |
| ส่ง | ==นิยมสามัญหรือตรี== |

## โคลงสี่สุภาพ

- 1 บท = ==4 บาท== บาทละ 2 วรรค: วรรคหน้า 5 คำ วรรคหลัง 2 คำ (บาทที่ 4 วรรคหลัง 4 คำ) รวม ==30 คำ== (เติมคำสร้อยท้ายบาท 1 และ 3 ได้)
- บังคับ ==เอก 7 โท 4==
- **สัมผัส**: คำสุดท้ายบาท 1 → คำที่ 5 ของบาท 2 และบาท 3 · คำสุดท้ายบาท 2 → คำที่ 5 ของบาท 4

## กาพย์

| ชนิด | โครงสร้าง | สัมผัส |
| **กาพย์ยานี 11** | 1 บาท = 2 วรรค (5 + 6 คำ) · 1 บท = 2 บาท = ==22 คำ== | ท้ายวรรค 1 → คำที่ 3 วรรค 2 · ท้ายวรรค 2 → ท้ายวรรค 3 |
| **กาพย์ฉบัง 16** | 1 บท = 3 วรรค (6 + 4 + 6 คำ) = 16 คำ | ท้ายวรรค 1 → ท้ายวรรค 2 |
| **กาพย์สุรางคนางค์ 28** | 1 บท = 7 วรรค วรรคละ 4 คำ = 28 คำ | สัมผัสท้ายวรรคต่อกันเป็นชุด |

## ฉันท์

- บังคับ ==ครุ–ลหุ== ตามแบบแผนที่รับจากอินเดีย (บาลี) เช่น อินทรวิเชียรฉันท์ 11, วสันตดิลกฉันท์ 14
- ต้องแม่นเรื่องครุ (เสียงหนัก) และลหุ (สระเสียงสั้นไม่มีตัวสะกด)

## ร่ายและลิลิต

- **ร่ายสุภาพ** วรรคละ 5 คำ ต่อกันกี่วรรคก็ได้ คำท้ายวรรคส่งสัมผัสไปคำที่ 1–3 ของวรรคถัดไป และ ==จบด้วยโคลงสองสุภาพ==
- **ลิลิต** = ร่าย + โคลง แต่งสลับกัน ร้อยด้วยสัมผัส เช่น **ลิลิตพระลอ** **ลิลิตตะเลงพ่าย**

> เคล็ดลับทำข้อสอบฉันทลักษณ์: นับคำ → หาคำสุดท้ายของวรรค → ไล่หาคำที่สัมผัสตามตำแหน่งบังคับ → ตรวจเสียงท้ายวรรค
`
}
],
      quizzes: [
        {"id": "th-01-1", "title": "ชุดที่ ๑ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-01-2", "title": "ชุดที่ ๑ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-02-1", "title": "ชุดที่ ๒ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๒ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 49, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-02-2", "title": "ชุดที่ ๒ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๒ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-03-1", "title": "ชุดที่ ๓ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๓ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-03-2", "title": "ชุดที่ ๓ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๓ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-04-1", "title": "ชุดที่ ๔ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๔ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-04-2", "title": "ชุดที่ ๔ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๔ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 47, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-05-1", "title": "ชุดที่ ๕ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๕ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 47, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-05-2", "title": "ชุดที่ ๕ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๕ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 45, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-06-1", "title": "ชุดที่ ๖ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๖ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-06-2", "title": "ชุดที่ ๖ · ข้อ ๕๒–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๖ · ข้อ ๕๒–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-07-1", "title": "ชุดที่ ๗ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๗ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 46, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-07-2", "title": "ชุดที่ ๗ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๗ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 46, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-08-1", "title": "ชุดที่ ๘ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๘ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-08-2", "title": "ชุดที่ ๘ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๘ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 49, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-09-1", "title": "ชุดที่ ๙ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๙ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 46, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-09-2", "title": "ชุดที่ ๙ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๙ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-10-1", "title": "ชุดที่ ๑๐ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๐ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-10-2", "title": "ชุดที่ ๑๐ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๐ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-11-1", "title": "ชุดที่ ๑๑ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๑ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 45, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-11-2", "title": "ชุดที่ ๑๑ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๑ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 50, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-12-1", "title": "ชุดที่ ๑๒ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๒ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 45, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-12-2", "title": "ชุดที่ ๑๒ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๒ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-13-1", "title": "ชุดที่ ๑๓ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๓ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-13-2", "title": "ชุดที่ ๑๓ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๓ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 47, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-14-1", "title": "ชุดที่ ๑๔ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๔ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 43, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-14-2", "title": "ชุดที่ ๑๔ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๔ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 46, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-15-1", "title": "ชุดที่ ๑๕ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๕ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-15-2", "title": "ชุดที่ ๑๕ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๕ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 43, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-16-1", "title": "ชุดที่ ๑๖ · ข้อ ๑–๕๐", "name": "แนวข้อสอบ · ชุดที่ ๑๖ · ข้อ ๑–๕๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 49, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-16-2", "title": "ชุดที่ ๑๖ · ข้อ ๕๑–๑๐๐", "name": "แนวข้อสอบ · ชุดที่ ๑๖ · ข้อ ๕๑–๑๐๐", "group": "แนวข้อสอบภาษาไทย ๑,๖๐๐ ข้อ", "count": 48, "file": "thai-quiz.js", "labels": "kk"},
        {"id": "th-103", "title": "TH 103 การเตรียมเพื่อการพูดและการเขียน", "name": "TH 103 การพูดและการเขียน", "group": "ข้อสอบเก่า", "count": 24, "file": "thai-quiz.js", "labels": "num"},
        {"id": "th-doc", "title": "ข้อสอบวิชาภาษาไทย (เฉลยจากไฟล์ Word)", "name": "ข้อสอบวิชาภาษาไทย", "group": "ข้อสอบเก่า", "count": 55, "file": "thai-quiz.js", "labels": "kk"}
      ]
    },

    {
      id: "religion",
      title: "ศาสนาศีลธรรม",
      color: "#f2a20c",
      icon: "lotus",
      summaries: [
{
title: "ความรู้ทั่วไปเกี่ยวกับศาสนา",
text: `
!! **ศาสนา** มาจากคำว่า **"สาสนํ"** แปลว่า ==คำสั่งสอน== ส่วน **Religion** แปลตามรูปศัพท์ว่า "การปฏิบัติต่อ การเกี่ยวข้อง"

## ผลที่ได้จากการศึกษาวิชาศาสนาและศีลธรรม

1. **ส่งเสริมคุณลักษณะของผู้ปกครอง** — ครองคนและครองงานได้อย่างมีประสิทธิภาพ
2. **สร้างสมรรถภาพในการทำงาน** — ทำงานได้เหมาะสม ถูกต้อง
3. **เข้าใจวิธีประสานงานกับผู้อื่น** — เกิดความเชื่อมือ เชื่อถือ เชื่อใจ
4. **เป็นผู้เหมาะสมกับสังคมปัจจุบัน** — ไม่ล้ำหน้า ไม่ล้าหลัง เป็นได้ทั้งผู้นำ ผู้อยู่ร่วม และผู้ตาม
5. **ปรับปรุงตนเองเพื่อความก้าวหน้า** — เป็นผู้มีความดี 3 สถานะ

| ความดี 3 สถานะ | หมายถึง |
| **ดีนอก** | รูปสมบัติ – ทรัพย์สมบัติ |
| **ดีใน** | วิชาความรู้ |
| **ในดี** | คุณธรรม |

## ความหมายของศาสนา

**โดยสรุป** ศาสนา คือ คำสั่งสอนที่พระศาสดาได้ค้นพบ หรือได้จากเทวโองการ มีลักษณะศักดิ์สิทธิ์ นำมาเผยแพร่ให้มนุษย์ประพฤติตามและประกอบพิธีกรรม เพื่อสันติสุขในระดับศีลธรรมจรรยาและจุดหมายสูงสุดของชีวิต

### องค์ประกอบของศาสนา (5 ประการ)

1. มหาชนเคารพในฐานะเป็น**ของศักดิ์สิทธิ์**
2. เป็น**คำสั่งสอนทางศีลธรรม**
3. มี**พระศาสดา**เป็นผู้ตั้ง
4. มี**คณะบุคคลผู้บริหารศาสนา**
5. มีการกวดขัน**ความภักดี**ต่อศาสนา

## คำที่มักออกสอบคู่กับ "ศาสนา"

| คำ | ความหมาย | ตัวอย่าง |
| **ลัทธิ** (Doctrine) | ความเชื่อ (Faith) ว่าสิ่งใดประเสริฐ แล้วประพฤติสั่งสอนสืบกันมา | นับถือผีเชื้อ (เหนือ) ผีปู่ตา (อีสาน) ศาลพระภูมิ (กลาง) |
| **ประเพณี** (Custom) | **จารีต** ที่มหาชนนิยมทำสืบกันมาจนเป็นพิธีกรรมของท้องถิ่น | ประเพณีทำศพ สงกรานต์ แต่งงาน |
| **ปรัชญา** (Philosophy) | แนวความคิดของนักคิดในเรื่องความจริงของโลก (อภิปรัชญา) กำเนิดความรู้ (ญาณวิทยา) ศิลปะและจริยศาสตร์ | — |

- **จารีต** = แบบแผนการปฏิบัติที่ทำสืบต่อกันมาช้านาน
- ประเพณีส่วนใหญ่เกิดจาก**ศาสนาและลัทธิ**
- **ลัทธิพราหมณ์** ภายหลังยอมรับนับถือเป็นศาสนา ==แม้ไม่มีศาสดาผู้เป็นเจ้าของศาสนา== (นับถือเทพเจ้าตามธรรมชาติ)

## ผลแห่งการนับถือศาสนา

1. ศาสนาทำให้ผู้นับถือ**ปกครองตนเองได้** (ทำดีเอง เว้นชั่วเอง)
2. ศาสนาทำให้ผู้นับถือ**เป็นคนดี** (ปรุงกาย วาจา ใจ)
3. ศาสนาทำให้**สังคมดีขึ้น** — สังคมสงบสุขได้เพราะ ==ความไว้วางใจ== ของคนในสังคม

## ศาสนาใหญ่ที่ควรศึกษา 4 ศาสนา

!! เรียงตาม ==อายุของศาสนาที่เกิดก่อน–หลัง== : **พราหมณ์ (ฮินดู) → พุทธ → คริสต์ → อิสลาม**

| ศาสนา | ประเทศที่นับถือเป็นหลัก (ตามเอกสาร) |
| พราหมณ์–ฮินดู | อินเดีย เนปาล |
| พุทธ | ไทย เมียนมา กัมพูชา ลาว ศรีลังกา จีน ญี่ปุ่น เกาหลี มองโกเลีย **เวียดนาม (มหายาน)** |
| คริสต์ | ประเทศในยุโรป อเมริกา ออสเตรเลีย นิวซีแลนด์ กรีก **ฟิลิปปินส์** |
| อิสลาม | **มาเลเซีย อินโดนีเซีย** ปากีสถาน อัฟกานิสถาน ตุรกี อิหร่าน ซาอุดีอาระเบีย จอร์แดน ประเทศในแอฟริกา |

### สถิติศาสนิกชนในประเทศไทย พ.ศ. 2539 (ตามเอกสาร)

| ศาสนา | จำนวน (คน) |
| **พุทธ** | 55,642,236 |
| **อิสลาม** | 3,185,710 |
| คริสต์ | 810,775 |
| พราหมณ์–ฮินดู ซิกข์ | 19,116 |

- จังหวัดที่มีชาวมุสลิมมากที่สุด: **นราธิวาส** ปัตตานี กรุงเทพฯ สงขลา ยะลา
- จังหวัดที่มีชาวคริสต์มากที่สุด: **เชียงใหม่** กรุงเทพฯ เชียงราย

## ศาสนากับสังคม (ทัศนะของ ดร.บี.อาร์. อัมเบดการ์)

1. สังคมต้องมีระเบียบ กฎหมาย หรือ**ศีลธรรม** — กฎหมายป้องกันความชั่วได้เพียงเล็กน้อย สังคมจะผาสุกได้ต้องอาศัย**ศีลธรรมเป็นหลัก**
2. ศาสนาต้อง**ไม่ขัดกับหลักวิทยาศาสตร์** ต้องประกอบด้วยหลักและเหตุผล
3. ศาสนาต้องเป็นมูลฐานแห่ง **เสรีภาพ ความเสมอภาค ภราดรภาพ**
4. ศาสนาต้อง**ไม่ส่งเสริมความยากจน**

!! ศาสนาที่มีคุณสมบัติครบทุกประการในทัศนะของอัมเบดการ์ คือ ==พระพุทธศาสนา==
`
},
{
title: "ศาสนาพราหมณ์–ฮินดู คริสต์ อิสลาม และซิกข์",
text: `
## ศาสนาพราหมณ์–ฮินดู

!! เกิดใน**ยุคพระเวท** จาก ==ชาวอารยัน== ที่ตั้งรกรากในอินเดีย — เป็นศาสนาที่ ==ไม่มีศาสดาผู้ก่อตั้ง==

- ชาวอารยัน (ผิวขาว) อพยพจากตอนใต้ของรัสเซีย ขับไล่ชาว**ดราวิเดียน** (ชนพื้นเมืองเดิม)
- เดิมนับถือ**พระอาทิตย์** (ดวงไฟยิ่งใหญ่ ต้นกำเนิดไฟทั้งปวง)
- เกิดก่อนพุทธกาลประมาณ **1,000 ปี**

### คัมภีร์พระเวท 4

**ฤคเวท → ยชุรเวท → สามเวท → อาถรรพเวท** (เรียงตามลำดับการแต่ง)

### ยุคของศาสนาพราหมณ์

| ยุค | ลักษณะ |
| **ธรรมชาติเทวนิยม** | นับถือเทพเจ้าตามธรรมชาติ เช่น พระอาทิตย์ พระจันทร์ พระวรุณ พระวายุ พระอัคนี |
| **เอกเทพ** | นับถือ**พระพรหม**เป็นผู้สร้างสรรพสิ่ง |
| **ไตรเทพ (ตรีมูรติ)** | เทพเจ้า 3 องค์ — โดยทั่วไปคือ **พระพรหม** (สร้าง) **พระวิษณุ/พระนารายณ์** (รักษา) **พระศิวะ/พระอิศวร** (ทำลาย) |

### วรรณะ 4

| วรรณะ | หน้าที่ | สีประจำ |
| **พราหมณ์** | สั่งสอนศาสนา ประกอบพิธีกรรม | ขาว |
| **กษัตริย์** | นักรบ ปกครอง ป้องกันบ้านเมือง | แดง |
| **แพศย์** | พาณิชยกรรม เกษตรกรรม (คนส่วนใหญ่) | เหลือง |
| **ศูทร** | กรรมกร ผู้ใช้แรงงาน | ดำ |

- พวกนอกวรรณะ (เกิดจากการแต่งงานข้ามวรรณะ) เรียกว่า ==จัณฑาล== เป็นที่รังเกียจของทุกวรรณะ

### ศาสนาพราหมณ์ในประเทศไทย

- เข้ามาทาง**อาณาจักรขอม** (พราหมณ์โกณฑัญญะสมรสกับนางพญาขอม)
- ศาสนสถาน: เขาพระวิหาร (ศรีสะเกษ) ปราสาทบ้านพลวง (สุรินทร์) **เขาพนมรุ้ง (บุรีรัมย์)** **ปราสาทหินพิมาย (นครราชสีมา)** เทวาลัยในลพบุรี
- องค์การดูแล: ==สำนักพราหมณ์พระราชครู (เสาชิงช้า กทม.)== สังกัด **สำนักพระราชวัง**

### ศาสนาซิกข์

- ศาสดาคือ ==คุรุนานัก (นานักเทพ)== — สอนให้ตำหนิสิ่งที่ควรตำหนิ ชมสิ่งที่ควรชม รู้จักให้อภัย

## ศาสนาคริสต์ (สัญลักษณ์ ไม้กางเขน)

!! ศาสนาประเภท **เทวนิยม** นับถือพระเจ้าองค์เดียว คือ ==พระยะโฮวา (Jehovah)== — เกิดที่**ปาเลสไตน์** ภายหลังพระพุทธศาสนา **543 ปี**

### ประวัติพระเยซู

- ประสูติที่**เมืองเบธเลเฮม** แคว้นยูดาย มารดาชื่อ **มาเรีย** บิดาชื่อ **โยเซฟ** อาศัยที่เมือง**นาซาเร็ธ**
- การนับ **คริสต์ศักราช** เริ่มนับตั้งแต่ปีที่พระเยซูประสูติ
- อายุ 30 ปี รับ ==ศีลจุ่ม (ล้างบาป)== จาก**ยอห์น (จอห์น)** ที่**แม่น้ำจอร์แดน** — จากนั้นได้ชื่อว่า "เยซูคริสต์"
- สิ้นพระชนม์อายุ **33 ปี** ด้วยการ**ตรึงไม้กางเขน** ที่เยรูซาเล็ม — นับเป็นศาสดาที่อายุน้อยที่สุด

### หลักคำสอนและคัมภีร์

- คำสอนสำคัญ: ==เทศนาบนภูเขา==
- หลักสำคัญที่สุดคือ ==ความรัก== — รักพระเจ้า รักเพื่อนบ้าน รักเพื่อนมนุษย์
- จุดหมายสูงสุด = **สวรรค์** / โทษร้ายแรง = **นรก**
- คัมภีร์: ==ไบเบิล==

### นิกายใหญ่ 3 นิกาย

| นิกาย | หมายเหตุ |
| **โรมันคาทอลิก** | นิกายดั้งเดิม ประมุขสูงสุดคือ **พระสันตะปาปา** ณ นครรัฐวาติกัน |
| **กรีกออร์ทอดอกซ์** | "ความเห็นเที่ยงตรง" |
| **โปรเตสแตนต์** | "นิกายค้าน" |

- **พระสันตะปาปาองค์แรก** คือ ==นักบุญเปโตร (เซนต์ปีเตอร์)== — ชื่อเปโตรแปลว่า "ศิลา"
- **สมเด็จพระสันตะปาปาจอห์น ปอลที่ 2** เคยเสด็จเยือนไทยครั้งแรก **พ.ศ. 2527**

### ศาสนาคริสต์กับประเทศไทย

| สมัย | ผู้นำเข้ามา / นิกาย |
| **ต้นกรุงศรีอยุธยา** | ชาว**โปรตุเกส** (โรมันคาทอลิก) |
| **สมัยสมเด็จพระนารายณ์ฯ** | ชาว**ฝรั่งเศส** (โรมันคาทอลิก) |
| **ต้นกรุงรัตนโกสินทร์** | นิกาย**โปรเตสแตนต์** |

- ประโยชน์ต่อไทย: ตั้งโรงเรียน การแพทย์สมัยใหม่ (ปลูกฝีป้องกันไข้ทรพิษ ผ่าตัด) **การพิมพ์ (สมัยรัชกาลที่ 3 — หมอบรัดเลย์)**
  - หนังสือพิมพ์ฉบับแรก: **บางกอกรีคอร์เดอร์**
  - หนังสือราชการฉบับแรกที่พิมพ์: **ประกาศห้ามสูบฝิ่น พ.ศ. 2382** (9,000 ฉบับ)
  - นิราศลอนดอน (หม่อมราโชทัย) — หนังสือที่หมอบรัดเลย์ซื้อลิขสิทธิ์
- คาทอลิกในไทย: องค์การที่ราชการรับรอง คือ **สภาประมุขแห่งบาทหลวงโรมันคาทอลิก** แบ่งเขตปกครองเป็น **มิซซัง**
- โปรเตสแตนต์: สภาคริสตจักร สหกิจคริสเตียน มูลนิธิคริสตจักร

## ศาสนาอิสลาม (สัญลักษณ์ พระจันทร์เสี้ยวและดาว)

!! **อิสลาม** แปลว่า ==สันติ / การยอมมอบตนต่อพระเจ้า== ผู้นับถือเรียกว่า ==มุสลิม== (ผู้ภักดีต่อพระเจ้า) ศาสดาคือ **นบีมุฮัมมัด**

- นบีมุฮัมมัดเกิดที่**นครมักกะฮ์** (ซาอุดีอาระเบีย) **พ.ศ. 1113 / ค.ศ. 570** เผ่า**กุเรช**
- อายุ **40 ปี** (เดือนรอมฎอน) ได้รับโองการจาก**พระอัลลอฮ์** ที่ถ้ำฮิรอ — เผยแผ่ศาสนา 23 ปี สิ้นชีวิตอายุ 63 ปี
- คัมภีร์: ==อัลกุรอาน== — มี **114 ซูเราะฮ์ (บท)**
- คำว่า **นบี** = ศาสนทูตผู้เผยแพร่ศาสนาที่พระอัลลอฮ์ทรงแต่งตั้ง

### หลักปฏิบัติ 5 ประการ (รุก่นอิสลาม)

| ข้อ | หลักปฏิบัติ | สาระ |
| 1 | **ปฏิญาณตน (ชะฮาดะฮ์)** | ศรัทธาว่าไม่มีพระเจ้าอื่นนอกจากอัลลอฮ์ และมุฮัมมัดเป็นศาสนทูต |
| 2 | **ละหมาด (ซอลาฮ์)** | วันละ **5 เวลา** ทำได้ทุกที่ ไม่จำเป็นต้องชุมนุม |
| 3 | **ถือศีลอด (เซาม์)** | ในเดือน**รอมฎอน** 1 เดือน งดกินดื่มตั้งแต่รุ่งอรุณถึงตะวันตก |
| 4 | **บริจาคซะกาต** | ช่วยเหลือคนยากจน เช่น เงินทอง 1/40 พืชผล 1/10 |
| 5 | **ประกอบพิธีฮัจญ์** | ไปนครมักกะฮ์ **อย่างน้อย 1 ครั้งในชีวิต** (เมื่อมีความสามารถ) |

- ละหมาด 5 เวลา: **ซุบฮิ** (รุ่งอรุณ) **ซุฮรี** (บ่าย) **อัสรี** (เย็น) **มัฆริบ** (ตะวันตก) **อิชาอ์** (กลางคืน)
- ผู้ประกอบพิธีฮัจญ์แล้ว ชายเรียก **ฮัจญี** หญิงเรียก **ฮัจญะฮ์**
- **วันศุกร์** = วันละหมาดใหญ่ร่วมกันที่มัสยิด
- **วันตรุษ** ปีละ 2 ครั้ง: ==อีดิ้ลฟิฏริ (ออกบวช/ตรุษรายอ)== หลังรอมฎอน และ ==อีดิ้ลอัฎฮา (ตรุษฮัจญี)==
- ข้อห้ามสำคัญ: **สุกรและสุรา**

### ศาสนาอิสลามในประเทศไทย

- องค์กรที่ราชการรับรอง: **สำนักจุฬาราชมนตรี** — ==จุฬาราชมนตรี== เป็นผู้นำสูงสุด
- โครงสร้าง: คณะกรรมการกลางอิสลามแห่งประเทศไทย → ประจำจังหวัด → ประจำมัสยิด
- ผู้ดูแลมัสยิด 3 ตำแหน่ง:

| ตำแหน่ง | หน้าที่ |
| **อิหม่าม** | ผู้นำศาสนาประจำมัสยิด |
| **คอเต็บ** | ผู้แสดงธรรม |
| **บิหลั่น** | ผู้ประกาศเชิญชวนให้มาละหมาด (อะซาน) |

!! เทียบ "ที่ศักดิ์สิทธิ์ – คัมภีร์ – ศาสดา" — พุทธ: **พระไตรปิฎก / พระพุทธเจ้า** · คริสต์: **ไบเบิล / พระเยซู** · อิสลาม: **อัลกุรอาน / นบีมุฮัมมัด** · พราหมณ์: **พระเวท / ไม่มีศาสดา** · ซิกข์: **คุรุนานัก**
`
},
{
title: "พุทธประวัติ",
text: `
## ดินแดนที่เกิดพระพุทธศาสนา

!! เกิดที่ ==ชมพูทวีป== (เชิงเขาหิมาลัยทางทิศใต้) เมื่อกว่า 2,500 ปีมาแล้ว — ปัจจุบันส่วนเหนือคือ **เนปาล ภูฏาน สิกขิม** ส่วนใต้คือ **อินเดีย** (สัญลักษณ์ศาสนาพุทธ = **ธรรมจักร**)

- ชาวชมพูทวีปมี 2 เชื้อชาติ: **อริยกะ** (ฉลาด มีการศึกษา — พระพุทธเจ้าเกิดในเผ่านี้) และ **มิลักขะ/ทัสยุ**
- ประชาชนนับถือ**ศาสนาพราหมณ์** แบ่ง **วรรณะ 4** — กษัตริย์ พราหมณ์ แพศย์ ศูทร
- อาชีพหลัก: ทำนา เลี้ยงสัตว์ ค้าขาย

## 1. ประสูติ

| เรื่อง | รายละเอียด |
| พระนามเดิม | ==สิทธัตถะ== (ผู้สำเร็จในสิ่งที่ประสงค์) วงศ์**ศากยะ** |
| พระบิดา | **พระเจ้าสุทโธทนะ** แห่งกรุง**กบิลพัสดุ์** |
| พระมารดา | **พระนางสิริมหามายา** แห่งกรุง**เทวทหะ** (โกลิยวงศ์) |
| สถานที่ | ==สวนลุมพินีวัน== ระหว่างกบิลพัสดุ์กับเทวทหะ (ปัจจุบันอยู่ใน**เนปาล**) ใต้ต้นสาละ (ต้นรัง) |
| วันประสูติ | วันเพ็ญ **ขึ้น 15 ค่ำ เดือน 6** ก่อน พ.ศ. 80 ปี |

- พราหมณ์ 8 คน ทำนาย 2 คติ: อยู่ครองเรือน → **พระเจ้าจักรพรรดิ** / ออกผนวช → **ศาสดาเอกของโลก**
- ==โกณฑัญญะ== (อายุน้อยที่สุด) ทำนายคติเดียวว่า **จะออกผนวชและตรัสรู้แน่นอน**
- ประสูติได้ **7 วัน** พระมารดาสวรรคต — **พระนางปชาบดีโคตมี** (พระน้านาง) เลี้ยงดูแทน
- ศึกษาศิลปวิทยากับ**ครูวิศวามิตร**
- พระชนม์ **16 พรรษา** อภิเษกกับ ==พระนางยโสธรา (พิมพา)== มีพระโอรสคือ ==ราหุล== (แปลว่า "บ่วง/ห่วง")

### สหชาติ 7 (เกิดวันเดียวกับเจ้าชายสิทธัตถะ)

พระนางยโสธรา · พระอานนท์ · กาฬุทายีอำมาตย์ · **นายฉันนะ** · **ม้ากัณฐกะ** · **ต้นมหาโพธิ์** · ขุมทรัพย์ทั้ง 4

## 2. เสด็จออกผนวช (มหาภิเนษกรมณ์)

- ทอดพระเนตรเห็น ==เทวทูต 4== : **คนแก่ คนเจ็บ คนตาย และสมณะ (บรรพชิต)**
- ทรงอุทานว่า **"สาธุ ปัพพชา"** = บวชท่าจะดีแน่
- เสด็จออกกลางดึก ทรง**ม้ากัณฐกะ** มี**นายฉันนะ**ตามเสด็จ
- ตัดพระเมาลีที่ฝั่ง ==แม่น้ำอโนมา== — พระชนมายุ ==29 พรรษา==

## 3. ตรัสรู้

- ศึกษาในสำนัก **อาฬารดาบส กาลามโคตร** และ **อุทกดาบส รามบุตร** จนจบ (สมาบัติ 8) แต่ยังไม่พ้นทุกข์
- บำเพ็ญ ==ทุกรกิริยา== ที่**ตำบลอุรุเวลาเสนานิคม แคว้นมคธ** เป็นเวลา ==6 ปี== — 3 ขั้น: **กัดฟัน → กลั้นลมหายใจ → อดอาหาร**
- **ปัญจวัคคีย์** คอยปรนนิบัติ: ==โกณฑัญญะ วัปปะ ภัททิยะ มหานามะ อัสสชิ==
- ทรงเลิกทุกรกิริยา หันมาเดิน**ทางสายกลาง (มัชฌิมาปฏิปทา)** — ปัญจวัคคีย์จึงหนีไปป่าอิสิปตนมฤคทายวัน
- เช้าวันตรัสรู้ รับ**ข้าวมธุปายาส**จาก**นางสุชาดา** และหญ้าคา 8 กำจาก**นายโสตถิยะ** ประทับใต้**ต้นโพธิ์** ริม**แม่น้ำเนรัญชรา** (ปัจจุบันคือ **พุทธคยา**)

### ญาณ 3 ในคืนตรัสรู้

| ยาม | ญาณที่บรรลุ | ความหมาย |
| **ปฐมยาม** | **บุพเพนิวาสานุสติญาณ** | ระลึกชาติได้ |
| **มัชฌิมยาม** | **จุตูปปาตญาณ** (ทิพพจักขุญาณ) | รู้การเกิด–ตายของสัตว์ตามกรรม |
| **ปัจฉิมยาม** | ==อาสวักขยญาณ== | รู้การสิ้นกิเลส → ตรัสรู้**อริยสัจ 4** |

!! ตรัสรู้วันเพ็ญ **เดือน 6 (วันวิสาขบูชา)** ก่อน พ.ศ. 45 ปี — พระชนมายุ ==35 พรรษา==

## 4. ประกาศพระศาสนา

- หลังตรัสรู้ประทับเสวยวิมุตติสุข 7 สัปดาห์ ทรงพิจารณาว่าคนมีปัญญาต่างกัน 4 ระดับ (**บัว 4 เหล่า**)

| บัว 4 เหล่า | ลักษณะ |
| **อุคฆฏิตัญญู** | ฉลาดมาก ฟังหัวข้อก็เข้าใจ (บัวพ้นน้ำ) |
| **วิปจิตัญญู** | ฟังคำอธิบายจึงเข้าใจ (บัวปริ่มน้ำ) |
| **เนยยะ** | ต้องอบรมจึงเข้าใจ — ==เวไนยสัตว์== (บัวใต้น้ำ) |
| **ปทปรมะ** | โปรดไม่ได้ (บัวจมโคลน เป็นอาหารปลาเต่า) |

### ปฐมเทศนา — วันอาสาฬหบูชา (ขึ้น 15 ค่ำ เดือน 8)

- แสดงแก่**ปัญจวัคคีย์** ที่ ==ป่าอิสิปตนมฤคทายวัน แขวงเมืองพาราณสี==
- ธรรมที่แสดง: ==ธัมมจักกัปปวัตตนสูตร== — ทางสุดโต่ง 2 ที่ไม่ควรเสพ (**กามสุขัลลิกานุโยค** และ **อัตตกิลมถานุโยค**) + **มัชฌิมาปฏิปทา** + **อริยสัจ 4**
- ==พระอัญญาโกณฑัญญะ== ได้ดวงตาเห็นธรรม เป็น**พระสงฆ์องค์แรก** โดยวิธี **เอหิภิกขุอุปสัมปทา** → **พระรัตนตรัยครบ 3**

### เหตุการณ์สำคัญหลังจากนั้น

- **ยสกุลบุตร**และสหายบวชตาม → มีพระอรหันต์ **60 รูป** ส่งออกไปประกาศศาสนา (ไม่ให้ไปทางเดียวกัน 2 รูป)
- โปรด**ชฎิล 3 พี่น้อง** พร้อมบริวาร 1,000 รูป
- **พระเจ้าพิมพิสาร** ถวาย**สวนไผ่** → ==วัดเวฬุวัน== **วัดแห่งแรกในพระพุทธศาสนา** (กรุงราชคฤห์)
- **อัครสาวก**: ==พระสารีบุตร== (เบื้องขวา เลิศทาง**ปัญญา**) — ==พระโมคคัลลานะ== (เบื้องซ้าย เลิศทาง**ฤทธิ์**) — พระสารีบุตรฟังธรรมจาก**พระอัสสชิ**
- **อนาถบิณฑิกเศรษฐี** สร้าง**วัดเชตวัน** · **นางวิสาขา** สร้าง**วัดบุพพาราม** (เมืองสาวัตถี แคว้นโกศล)
- โปรด**องคุลิมาล** ("ผู้มีนิ้วมือเป็นมาลัย") ก่อนจะฆ่ามารดา — "เราหยุดแล้ว แต่ท่านยังไม่หยุด"

### จาตุรงคสันนิบาต — วันมาฆบูชา (ขึ้น 15 ค่ำ เดือน 3) ณ วัดเวฬุวัน

1. พระสงฆ์ **1,250 รูป** มาประชุม**โดยไม่ได้นัดหมาย**
2. ทุกรูปเป็น**พระอรหันต์**
3. ทุกรูปเป็น**เอหิภิกขุ** (พระพุทธเจ้าบวชให้เอง)
4. พระพุทธเจ้าแสดง ==โอวาทปาติโมกข์==

### พุทธบริษัท 4

**ภิกษุ · ภิกษุณี · อุบาสก · อุบาสิกา** — ต่อมาอนุญาตให้ผู้อายุไม่ถึง 20 ปีบวชเป็น**สามเณร/สามเณรี**

## 5. ปรินิพพาน

- ประกาศศาสนา **45 ปี** ประชวรด้วย**โรคลงพระโลหิต (ปักขันทิกาพาธ)**
- ปรินิพพานที่ ==สาลวโนทยาน เมืองกุสินารา แคว้นมัลละ== วันเพ็ญ **เดือน 6** พระชนมายุ ==80 พรรษา==
- สาวกองค์สุดท้าย: ==สุภัททปริพาชก==
- **ปัจฉิมโอวาท**: "สังขารทั้งปวงมีความเสื่อมไปเป็นธรรมดา พวกเธอจงยังกิจทั้งปวงให้ถึงพร้อมด้วย**ความไม่ประมาท**เถิด"

## สรุปพระชนมายุสำคัญ (ออกสอบบ่อยมาก)

| พระชนมายุ | เหตุการณ์ |
| **16** | อภิเษกสมรสกับพระนางยโสธรา |
| **29** | เสด็จออกผนวช |
| **29–35** | ศึกษาและบำเพ็ญทุกรกิริยา **6 ปี** |
| **35** | ตรัสรู้ |
| **35–80** | ประกาศศาสนา **45 ปี** |
| **80** | ปรินิพพาน |

!! **ประสูติ ตรัสรู้ ปรินิพพาน** ล้วนตรงกับ ==วันเพ็ญเดือน 6 (วิสาขบูชา)==

### การนับพุทธศักราช

- เริ่มนับเมื่อพระพุทธเจ้าปรินิพพาน — **ไทย**นับ พ.ศ. 1 เมื่อปรินิพพานล่วงไปแล้ว **1 ปี**
- **พม่าและศรีลังกา** นับ พ.ศ. 1 ในปีปรินิพพาน จึง**เร็วกว่าไทย 1 ปี**

## สังเวชนียสถาน 4

| สถานที่ | เหตุการณ์ |
| **ลุมพินีวัน** (เนปาล) | ประสูติ |
| **พุทธคยา** (ใต้ต้นโพธิ์ ริมแม่น้ำเนรัญชรา) | ตรัสรู้ |
| **ป่าอิสิปตนมฤคทายวัน** (สารนาถ ใกล้พาราณสี) — มี**ธัมเมกขสถูป** | แสดงปฐมเทศนา |
| **สาลวโนทยาน เมืองกุสินารา** | ปรินิพพาน |

- รัฐบาลไทยจำลองสังเวชนียสถานทั้ง 4 ไว้ที่ ==พุทธมณฑล จังหวัดนครปฐม==

## พระจริยาวัตรที่เป็นแบบอย่าง

1. **เมตตากรุณาสูง** — ช่วยหงส์ที่เจ้าชายเทวทัตยิง ("ผู้ให้ชีวิตเป็นเจ้าของ") ไม่โกรธพระเทวทัต
2. **พากเพียรสูง** — ตั้งปณิธานไม่ลุกจากที่จนกว่าจะตรัสรู้
3. **ใฝ่รู้ แก้ปัญหาด้วยปัญญา** — เลิกทรมานตนเมื่อเห็นว่าไม่ใช่ทาง
4. **เสียสละ** — สละราชสมบัติ ครอบครัว ความสุขส่วนตน

## พุทธจริยา 3

| พุทธจริยา | ความหมาย | ตัวอย่าง |
| **โลกัตถจริยา** | ประโยชน์แก่**ชาวโลก** | พุทธกิจประจำวัน 5 / โปรดสุภัททะ |
| **ญาตัตถจริยา** | ประโยชน์แก่**พระญาติ** | โปรดพุทธบิดา · แสดงอภิธรรมโปรดพุทธมารดา · ==ห้ามญาติแย่งน้ำแม่น้ำโรหิณี== (พระพุทธรูป**ปางห้ามญาติ**) |
| **พุทธัตถจริยา** | ประโยชน์**ในฐานะพระพุทธเจ้า** | บัญญัติพระวินัย · ตั้งพุทธบริษัท 4 · โปรดองคุลิมาล |

### พุทธกิจประจำวัน 5

1. **เช้า** — บิณฑบาต (โปรดสัตว์)
2. **บ่าย** — แสดงธรรมแก่ประชาชน
3. **ค่ำ (ยามที่ 1)** — ประทานโอวาทแก่ภิกษุ
4. **เที่ยงคืน (ยามที่ 2)** — ตอบปัญหาเทวดา
5. **ใกล้รุ่ง (ยามที่ 3)** — ตรวจดูสัตว์ที่ควรโปรด
`
},
{
title: "หลักธรรมสำคัญ: พระรัตนตรัย อริยสัจ ไตรลักษณ์",
text: `
## พระรัตนตรัย

!! **รัตนะ** แปลว่า ==แก้ว== — พระรัตนตรัย = **แก้วอันประเสริฐ 3 ประการ** : พระพุทธ พระธรรม พระสงฆ์

| รัตนะ | ความหมาย | คุณ |
| **พระพุทธ** | ผู้ตรัสรู้เอง ค้นพบสัจธรรม แล้วสอนผู้อื่นให้รู้ตาม | **พุทธคุณ 9** |
| **พระธรรม** | คำสั่งสอนของพระพุทธเจ้า (ความจริงที่มีอยู่แล้ว พระองค์ทรง**ค้นพบ** ไม่ได้คิดขึ้นเอง) | **ธรรมคุณ 6** |
| **พระสงฆ์** | สาวกผู้ปฏิบัติตามและเผยแผ่ธรรม | **สังฆคุณ 9** |

- **คุณของพระพุทธเจ้าโดยย่อ 3**: **พระปัญญาคุณ** (รู้แจ้ง) · **พระวิสุทธิคุณ** (บริสุทธิ์จากกิเลส) · **พระกรุณาคุณ** (สงสารสั่งสอน)
- อุดมการณ์ของพุทธศาสนา = ==ถือธรรมะเป็นใหญ่== — แม้พระพุทธเจ้าก็ทรงเคารพพระธรรม
- พระพุทธเจ้าองค์ต่อไป: ==พระศรีอริยเมตไตรย==

### พุทธคุณ 9 (อิติปิ โส ...)

| บาลี | ความหมาย |
| **อรหัง** | ผู้ไกลจากกิเลส |
| **สัมมาสัมพุทโธ** | ผู้ตรัสรู้ชอบได้โดยพระองค์เอง |
| **วิชชาจรณสัมปันโน** | ผู้ถึงพร้อมด้วยวิชชาและจรณะ |
| **สุคโต** | ผู้เสด็จไปดีแล้ว |
| **โลกวิทู** | ผู้รู้แจ้งโลก |
| **อนุตตโร ปุริสทัมมสารถิ** | ผู้ฝึกคนที่ควรฝึกได้อย่างไม่มีใครยิ่งกว่า |
| **สัตถา เทวมนุสสานัง** | ศาสดาของเทวดาและมนุษย์ |
| **พุทโธ** | ผู้รู้ ผู้ตื่น ผู้เบิกบาน |
| **ภควา** | ผู้มีโชค ผู้จำแนกธรรม |

### ธรรมคุณ 6 (สวากขาโต ...)

| บาลี | ความหมาย |
| **สวากขาโต ภควตา ธัมโม** | พระธรรมอันพระผู้มีพระภาคตรัสไว้ดีแล้ว |
| **สันทิฏฐิโก** | ผู้ปฏิบัติเห็นได้ด้วยตนเอง |
| **อกาลิโก** | ไม่จำกัดกาล |
| **เอหิปัสสิโก** | ควรเรียกให้มาดู (พิสูจน์ได้) |
| **โอปนยิโก** | ควรน้อมเข้ามาใส่ตัว |
| **ปัจจัตตัง เวทิตัพโพ วิญญูหิ** | วิญญูชนรู้ได้เฉพาะตน |

### สังฆคุณ 9 (สุปฏิปันโน ...)

**สุปฏิปันโน** ปฏิบัติดี · **อุชุปฏิปันโน** ปฏิบัติตรง · **ญายปฏิปันโน** ปฏิบัติถูกทาง · **สามีจิปฏิปันโน** ปฏิบัติสมควร · **อาหุเนยโย** ควรแก่ของคำนับ · **ปาหุเนยโย** ควรแก่การต้อนรับ · **ทักขิเณยโย** ควรแก่ทักษิณา · **อัญชลีกรณีโย** ควรแก่การกราบไหว้ · ==อนุตตรัง ปุญญักเขตตัง โลกัสสะ== เป็นนาบุญอันยอดเยี่ยมของโลก

### ไตรสรณคมน์

การถึงพระรัตนตรัยเป็นที่พึ่ง: **พุทธัง / ธัมมัง / สังฆัง สะระณัง คัจฉามิ** กล่าว 3 รอบ (รอบ 2 เติม **ทุติยัมปิ** = แม้ครั้งที่ 2 / รอบ 3 เติม **ตะติยัมปิ** = แม้ครั้งที่ 3)

## อริยสัจ 4 (ความจริงอันประเสริฐ)

| อริยสัจ | ความหมาย | ใจความ |
| **ทุกข์** | ปัญหาของชีวิต | เกิด แก่ เจ็บ ตาย — โดยย่อคือ **อุปาทานขันธ์ 5** เป็นทุกข์ |
| **สมุทัย** | เหตุแห่งทุกข์ | ==ตัณหา 3== : **กามตัณหา** (อยากได้) **ภวตัณหา** (อยากเป็น) **วิภวตัณหา** (อยากไม่เป็น) |
| **นิโรธ** | ความดับทุกข์ | ==นิพพาน== — จุดหมายสูงสุดของพระพุทธศาสนา |
| **มรรค** | ทางดับทุกข์ | **มัชฌิมาปฏิปทา** = มรรคมีองค์ 8 |

!! หน้าที่ต่ออริยสัจ: ทุกข์ — **กำหนดรู้** · สมุทัย — **ละ** · นิโรธ — **ทำให้แจ้ง** · มรรค — **ทำให้เจริญ**

### มรรคมีองค์ 8 สรุปลงใน ไตรสิกขา

| ไตรสิกขา | องค์มรรค |
| **ปัญญา** | สัมมาทิฏฐิ (เห็นชอบ) · สัมมาสังกัปปะ (ดำริชอบ) |
| **ศีล** | สัมมาวาจา (เจรจาชอบ) · สัมมากัมมันตะ (กระทำชอบ) · สัมมาอาชีวะ (เลี้ยงชีพชอบ) |
| **สมาธิ** | สัมมาวายามะ (เพียรชอบ) · สัมมาสติ (ระลึกชอบ) · สัมมาสมาธิ (ตั้งจิตมั่นชอบ) |

## โอวาทปาติโมกข์ — หัวใจพระพุทธศาสนา 3

| บาลี | ความหมาย |
| **สัพพปาปัสส อกรณัง** | ==ไม่ทำความชั่วทั้งปวง== (ทางกาย 3 วาจา 4 ใจ 3) |
| **กุสลัสสูปสัมปทา** | ==ทำความดีให้ถึงพร้อม== |
| **สจิตตปริโยทปนัง** | ==ทำจิตใจให้บริสุทธิ์== (ด้วยกุศลมูล: อโลภะ อโทสะ อโมหะ) |

- แสดงในวัน**มาฆบูชา** แก่พระสงฆ์ 1,250 รูป

### ความชั่ว–ความดี 3 ทาง (กรรมบถ)

| ทาง | ไม่ทำชั่ว | ทำดี |
| **กาย** | ไม่ฆ่า/เบียดเบียน · ไม่ลักขโมย · ไม่ผิดในกาม | เมตตากรุณา · เคารพทรัพย์ผู้อื่น · สำรวมในกาม |
| **วาจา** | ไม่พูดเท็จ · ไม่ส่อเสียด · ไม่หยาบ · ไม่เพ้อเจ้อ | พูดจริง · พูดสมานสามัคคี · พูดสุภาพ · พูดมีประโยชน์ |
| **ใจ** | ไม่โลภอยากได้ · ไม่พยาบาท · ไม่เห็นผิด | พอใจของที่ได้โดยชอบ · แผ่เมตตา · เห็นชอบ (เชื่อกรรม) |

## ไตรลักษณ์ (ลักษณะสามัญ 3 ของสรรพสิ่ง)

| ไตรลักษณ์ | ความหมาย |
| **อนิจจตา (อนิจจัง)** | ความไม่เที่ยง ไม่คงที่ |
| **ทุกขตา (ทุกขัง)** | ความเป็นทุกข์ ทนอยู่ในสภาพเดิมไม่ได้ |
| **อนัตตตา (อนัตตา)** | ความไม่ใช่ตัวตน |

- ประโยชน์: ไม่ลุ่มหลง ลด**อุปาทาน** (การยึดมั่นถือมั่น)

## ขันธ์ 5 (เบญจขันธ์) — องค์ประกอบของชีวิต

| ขันธ์ | ความหมาย | กลุ่ม |
| **รูป** | ร่างกาย | รูป |
| **เวทนา** | ความรู้สึก สุข ทุกข์ เฉย ๆ | นาม |
| **สัญญา** | ความจำได้หมายรู้ | นาม |
| **สังขาร** | สิ่งปรุงแต่งจิต (คิดดี ชั่ว กลาง ๆ) | นาม |
| **วิญญาณ** | การรับรู้ทางประสาทสัมผัส | นาม |

!! ลำดับที่ถูกต้อง: ==รูป → เวทนา → สัญญา → สังขาร → วิญญาณ==

## อายตนะ 6 (ภายใน 6 คู่กับภายนอก 6 = 12)

| ภายใน | ภายนอก |
| **จักขุ** (ตา) | **รูปะ** (รูป สี) |
| **โสตะ** (หู) | **สัททะ** (เสียง) |
| **ฆานะ** (จมูก) | **คันธะ** (กลิ่น) |
| **ชิวหา** (ลิ้น) | **รสะ** (รส) |
| **กาย** | **โผฏฐัพพะ** (สิ่งสัมผัสกาย) |
| **มโน** (ใจ) | **ธัมมารมณ์** (อารมณ์ที่เกิดกับใจ) |

## ศาสนธรรมหลักอื่น ๆ

- **ปฏิจจสมุปบาท** — หลักการเกิดขึ้นของสิ่งทั้งหลายโดยอาศัยเหตุปัจจัยต่อเนื่องกัน (ทุกข์เกิดเพราะเหตุ ดับเพราะเหตุดับ)
- **นิพพาน** — ความดับกิเลสและกองทุกข์สิ้นเชิง
- **บุญ** = ความสะอาดแห่งจิต · **บาป** = ความเสียหายแห่งจิต
`
},
{
title: "พระพุทธศาสนาหลังพุทธกาลและในประเทศไทย",
text: `
## แบบแผนการบริหารศาสนาที่ทรงวางไว้

1. **หลักปฏิบัติ** — ยึด**พระธรรมวินัย**เป็นหลัก
2. **หลักการบริหาร** — ใช้มติสงฆ์ (**สังฆกรรม**) เรื่องสำคัญต้อง**เอกฉันท์**
3. **หลักการปกครอง** — เคารพตาม**อาวุโส** ปกครองโดยพระอุปัชฌาย์อาจารย์

| ฝ่ายสงฆ์ | เทียบกับ (ประชาธิปไตย) |
| ธรรมวินัย | **รัฐธรรมนูญ** |
| มติสงฆ์ | มติมหาชน (สภา) |
| อุปัชฌาย์อาจารย์ | หัวหน้าครอบครัว |
| ภิกษุผู้ได้รับมอบหมาย | เจ้าหน้าที่รัฐ |

!! **พระธรรม** (คำสอนขัดเกลากาย วาจา ใจ) + **พระวินัย** (ข้อบัญญัติควบคุมกายวาจา) รวมกันเรียกว่า ==พระพุทธศาสนา== — มี **84,000 พระธรรมขันธ์**

## พระไตรปิฎก

**ปิฎก** แปลว่า กระจาด ตะกร้า (ที่รวบรวม) — ฉบับอักษรไทยมี ==45 เล่ม==

| ปิฎก | เนื้อหา | จำนวนเล่ม |
| **วินัยปิฎก** | วินัย ศีล สิกขาบทของภิกษุ ภิกษุณี | **8** |
| **สุตตันตปิฎก** | พระสูตร พระธรรมเทศนา เรื่องเล่า | **25** |
| **อภิธรรมปิฎก** | ธรรมขั้นสูง (ปรมัตถธรรม) ล้วน ๆ ไม่เกี่ยวกับบุคคลและเหตุการณ์ | **12** |

- ลำดับคัมภีร์: **พระไตรปิฎก → อรรถกถา** (อธิบายไตรปิฎก) **→ ฎีกา → อนุฎีกา → อาจริยมติ**

## การสังคายนา

**สังคายนา** = การประชุมสงฆ์ชำระสะสางพระธรรมวินัย ครั้งสำคัญ 5 ครั้ง

| ครั้งที่ | พ.ศ. | จุดประสงค์ | ประเทศ |
| **1** | 3 เดือนหลังปรินิพพาน | รวบรวมร้อยกรองพระธรรมวินัย | อินเดีย |
| **2** | 100 | ตัดสินภิกษุที่ประพฤติผิดวินัย | อินเดีย |
| **3** | 218 | ชำระผู้ปลอมบวช และ**ส่งสมณทูต 9 สาย** (รวมถึงสุวรรณภูมิ) | อินเดีย |
| **4** | 236 | ประดิษฐานพระพุทธศาสนาใน**ศรีลังกา** | ศรีลังกา |
| **5** | ราว 450 | ==จารึกพระธรรมวินัยเป็นลายลักษณ์อักษร (ลงใบลาน)== ครั้งแรก | ศรีลังกา |

!! ครั้งที่ **1–3 ทำในอินเดีย** · ครั้งที่ **4–5 ทำในศรีลังกา**

## นิกายของพระพุทธศาสนา

ประมาณ พ.ศ. 100 สงฆ์ตีความพระวินัยต่างกัน → แยกเป็น 2 นิกาย

| นิกาย | ประเทศ |
| **เถรวาท (หินยาน)** | ==ศรีลังกา พม่า ไทย กัมพูชา ลาว== |
| **มหายาน** | ==ทิเบต จีน เวียดนาม เกาหลี ญี่ปุ่น== |

- คณะสงฆ์ไทยเป็นเถรวาท แบ่งเป็น 2 นิกาย: **มหานิกาย** และ **ธรรมยุติกนิกาย** (มีคณะสงฆ์จีนนิกาย–อนัมนิกายจำนวนน้อย)

## พระพุทธศาสนาเข้าสู่ประเทศไทย 4 ยุค

| ยุค | ช่วงเวลา | นิกาย / ลักษณะ | ที่ตั้ง |
| **1 เถรวาทแบบดั้งเดิม** | ราว พ.ศ. 300 (สมัยทวารวดี) | เถรวาท (สมณทูตจากพระเจ้าอโศก) | **นครปฐม** — สร้างพระปฐมเจดีย์องค์เดิม |
| **2 มหายาน** | ราว พ.ศ. 1300 | มหายาน จาก**ศรีวิชัย** (สุมาตรา) | **นครศรีธรรมราช ไชยา** |
| **3 เถรวาทแบบพุกาม** | ราว พ.ศ. 1600 | เถรวาท โดย**พระเจ้าอนุรุทธ** (พม่า) | **ล้านนา** |
| **4 เถรวาทแบบลังกาวงศ์** | ราว พ.ศ. 1800 | เถรวาท จาก**ลังกา** | **นครศรีธรรมราช** → สุโขทัย (นับถือจนถึงปัจจุบัน) |

- คนไทยยุคแรก (อาณาจักรอ้ายลาว **ขุนหลวงเม้า** พ.ศ. 612) รับนับถือพุทธแบบ**มหายาน**จากจีน
- พระมหากษัตริย์ไทยทรงเป็น ==เอกอัครศาสนูปถัมภก== (ผู้อุปถัมภ์ทุกศาสนา)

## การปกครองคณะสงฆ์ไทย

| ช่วง | การปกครอง |
| **รัชกาลที่ 5** | ==พ.ร.บ.ลักษณะการปกครองคณะสงฆ์ ร.ศ. 121== — แบ่งเป็นหมวด แขวง จังหวัด มณฑล |
| **รัชกาลที่ 8** | พ.ร.บ.คณะสงฆ์ 2484 — แบ่งอำนาจ 3 ฝ่ายเลียนแบบรัฐ: **สังฆสภา** (นิติบัญญัติ) **คณะสังฆมนตรี** (บริหาร) **คณะวินัยธร** (ตุลาการ) |
| **พ.ศ. 2505** | ==พ.ร.บ.คณะสงฆ์ 2505== — สมเด็จพระสังฆราชบัญชาการผ่าน**มหาเถรสมาคม** (ใช้ถึงปัจจุบัน มีแก้ไขเพิ่มเติม) |

### มหาเถรสมาคม

- **สมเด็จพระสังฆราช** — ประธานโดยตำแหน่ง (เป็น**สกลมหาสังฆปรินายก**)
- **สมเด็จพระราชาคณะ** — กรรมการโดยตำแหน่ง
- **พระราชาคณะ**ที่สมเด็จพระสังฆราชแต่งตั้ง ไม่เกิน **12 รูป**
- เลขาธิการโดยตำแหน่ง: ตามเอกสาร คือ **อธิบดีกรมการศาสนา** (ปัจจุบันคือ **ผู้อำนวยการสำนักงานพระพุทธศาสนาแห่งชาติ**)

### การปกครองส่วนภูมิภาค

- **เจ้าคณะใหญ่ 5 รูป**: หนกลาง · หนเหนือ · หนใต้ · หนตะวันออก · ธรรมยุต
- ลำดับชั้น: ==เจ้าคณะภาค (18 ภาค) → เจ้าคณะจังหวัด → เจ้าคณะอำเภอ → เจ้าคณะตำบล → เจ้าอาวาส==

### เทียบคำฝ่ายพุทธจักร – ฝ่ายอาณาจักร

| พุทธจักร | อาณาจักร |
| สังฆมณฑล | ประเทศ |
| สมเด็จพระสังฆราช | พระมหากษัตริย์ |
| มหาเถรสมาคม | คณะรัฐบาล |
| เจ้าคณะภาค | ผู้ว่าราชการภาค |
| เจ้าคณะจังหวัด | ผู้ว่าราชการจังหวัด |
| เจ้าคณะอำเภอ | นายอำเภอ |
| เจ้าคณะตำบล | กำนัน |
| เจ้าอาวาส | ผู้ใหญ่บ้าน |
| กฎมหาเถรสมาคม | พระราชบัญญัติ |
| **นิตยภัต** | เงินเดือน |
| **อธิกรณ์** | คดี |
| **สมณศักดิ์** | บรรดาศักดิ์ |
| **ไวยาวัจกร** | เจ้าหน้าที่การเงิน |

### สมณศักดิ์ (จากต่ำไปสูง)

**พระฐานานุกรม** (พระปลัด พระสมุห์ พระใบฎีกา) → **พระครูสัญญาบัตร** → **พระราชาคณะชั้นสามัญ** (เจ้าคุณ) → **ชั้นราช** → **ชั้นเทพ** → **ชั้นธรรม** → **ชั้นเจ้าคณะรอง (รองสมเด็จ)** → **สมเด็จพระราชาคณะ** → ==สมเด็จพระสังฆราช==

## ธุระในพระศาสนา 2

| ธุระ | ความหมาย |
| ==คันถธุระ== | การศึกษาพระปริยัติธรรม (เล่าเรียน) |
| ==วิปัสสนาธุระ== | การปฏิบัติวิปัสสนากรรมฐาน เพื่อพ้นทุกข์ |

### การศึกษาพระปริยัติธรรม 2 แผนก

| แผนก | ผู้เรียน | ชั้น |
| **นักธรรม** (บรรพชิต) | ภิกษุ สามเณร | น.ธ.ตรี โท เอก |
| **ธรรมศึกษา** (คฤหัสถ์) | ฆราวาส | ธ.ศ.ตรี โท เอก |
| **บาลี** | **เฉพาะภิกษุสามเณร** | **เปรียญธรรม ป.ธ. 3–9** |

- **มหาวิทยาลัยสงฆ์ 2 แห่ง**

| มหาวิทยาลัย | ที่ตั้ง | ปริญญาตรี |
| **มหามกุฏราชวิทยาลัย** (แห่งแรก) | วัดบวรนิเวศวิหาร | ศาสนศาสตรบัณฑิต (ศน.บ.) |
| **มหาจุฬาลงกรณราชวิทยาลัย** | วัดมหาธาตุยุวราชรังสฤษฎิ์ | พุทธศาสตรบัณฑิต (พธ.บ.) |

## ทรัพย์สินทางศาสนา 3 ประเภท

| ประเภท | ความหมาย |
| **ศาสนสมบัติกลาง** | ไม่เป็นของวัดใด เช่น **พระปฐมเจดีย์** (นครปฐม) **พระมงคลบพิตร** (อยุธยา) |
| **ของสงฆ์** | สมบัติของวัด ที่ดิน อาคาร — โอนให้เอกชนได้วิธีเดียวคือ ==ผาติกรรม== (แลกเปลี่ยนโดยวัดไม่เสียเปรียบ) |
| **ของบุคคล** | บริขารส่วนตัวของภิกษุ เจ้าของยกให้ใครก็ได้ |
`
},
{
title: "พระสงฆ์และพระวินัย",
text: `
## พระสงฆ์ 2 ประเภท

| ประเภท | ความหมาย |
| **อริยสงฆ์** | ผู้บรรลุธรรมเป็นพระอริยบุคคลแล้ว |
| **สมมติสงฆ์** | ผู้อุปสมบทแล้วแต่ยังไม่บรรลุธรรม |

### ลำดับบุคคลในพระพุทธศาสนา (จากต่ำไปสูง)

1. **พุทธมามกะ / พุทธมามิกา** (ผู้ประกาศตนนับถือพุทธ)
2. **อุบาสก / อุบาสิกา**
3. **สามเณร / สามเณรี**
4. **ภิกษุ / ภิกษุณี**
5. **พระอริยะ**

- "พระสงฆ์" ในพระรัตนตรัย หมายถึงบุคคลชั้นที่ 4 และ 5

### คุณของพระสงฆ์

1. ปฏิบัติดี ปฏิบัติตรง ปฏิบัติควร ปฏิบัติชอบ
2. เป็น**ศาสนทายาท** สืบทอดพระศาสนา
3. เป็น**พยาน**ว่าคำสอนปฏิบัติได้จริงและได้ผลจริง
4. เป็น**นาบุญ**ของโลก

## การอุปสมบท

- **บวช** มาจาก "ป + วช" แปลว่า ==เว้นทั่ว / เว้นชั่ว==
- ผู้จะบวชเรียกว่า ==อุปสัมปทาเปกข์ หรือ นาค==
- **คุณสมบัติ**: เป็นชาย อายุ **20 ปีบริบูรณ์** ไม่มีโรคน่ารังเกียจ ไม่เป็นหนี้ ไม่หนีราชการ/ไม่ต้องคดี ได้รับอนุญาตจากบิดามารดา มีบริขารครบ
- **พิธี**: ทำในท่ามกลางสงฆ์ ภายใน**เขตสีมา (อุโบสถ)** มี **พระอุปัชฌาย์** + **คู่สวด** (พระกรรมวาจาจารย์ + พระอนุสาวนาจารย์) + พระอันดับ
- ขาดจากความเป็นภิกษุเมื่อ: **ลาสิกขา** (บวชใหม่ได้) หรือ **ต้องอาบัติปาราชิก** (บวชไม่ได้อีกตลอดชีวิต)

### อัฐบริขาร (บริขาร 8)

**สบง จีวร สังฆาฏิ** (ไตรจีวร) · **บาตร** · **มีดโกน** · **เข็ม** · **ประคดเอว** · **ผ้ากรองน้ำ**

## พระวินัย — ศีลของภิกษุ ==227 ข้อ==

!! สิกขาบทในพระปาติโมกข์ **220 ข้อ** + **อธิกรณสมถะ 7** (วิธีระงับอธิกรณ์) = **227 ข้อ** · การทำผิดวินัยเรียกว่า ==อาบัติ==

### อาบัติ 7 กอง แบ่งโทษหนักเบา 3 ชั้น

| ชั้นโทษ | อาบัติ | ผลเมื่อต้องอาบัติ |
| **หนักที่สุด (อเตกิจฉา)** | ==ปาราชิก== | ขาดจากความเป็นภิกษุทันที **บวชใหม่ไม่ได้ตลอดชีวิต** |
| **หนักรอง** | ==สังฆาทิเสส== | ต้อง**อยู่กรรม** (ปริวาส เท่าจำนวนวันที่ปิดไว้ + มานัต 6 ราตรี) จึงพ้นได้ |
| **เบา (เทสนาคามินี)** | ถุลลัจจัย · ปาจิตตีย์ · ปาฏิเทสนียะ · ทุกกฏ · ทุพภาสิต | **แสดงอาบัติ** (ปลงอาบัติ) ต่อหน้าภิกษุอื่นจึงพ้นได้ |

### ปาราชิก 4

1. **เสพเมถุน**
2. **ลักทรัพย์** มีราคาตั้งแต่ **5 มาสก** ขึ้นไป
3. **ฆ่ามนุษย์** (แม้ทารกในครรภ์)
4. **อวดอุตริมนุสธรรม** ที่ไม่มีในตน (อวดว่าบรรลุฌาน มรรค ผล)

### สังฆาทิเสส 13 (ตัวอย่าง)

- ทำน้ำอสุจิเคลื่อน · จับต้องกายหญิง · พูดเกี้ยวหญิง · ให้หญิงบำเรอตน
- ชักสื่อให้ชายหญิงเป็นสามีภรรยากัน
- สร้างกุฏิผิดแบบไม่หารือสงฆ์
- โกรธแล้วใส่ความภิกษุอื่นด้วยอาบัติปาราชิก
- พยายามทำสงฆ์ให้แตกกัน (สังฆเภท) · เป็นผู้ว่ายาก · ประจบคฤหัสถ์

### ข้อห้ามอื่น ๆ ที่ควรรู้

- **เภสัช 5** (เนยใส เนยข้น น้ำมัน น้ำผึ้ง น้ำอ้อย) รับประเคนแล้ว ==เก็บไว้ฉันได้ 7 วัน==
- ==เนื้อต้องห้าม 10 ชนิด==: มนุษย์ ช้าง ม้า สุนัข งู ราชสีห์ เสือโคร่ง เสือเหลือง เสือดาว หมี
- ภิกษุมีบาตรได้ใบเดียว ขอบาตรใหม่จากผู้ไม่ใช่ญาติได้เมื่อบาตรเดิมร้าว
- ห้ามรับ/จับต้องเงินทอง ห้ามซื้อขาย
- ห้ามนั่งในที่ลับกับหญิงสองต่อสอง
- **สถานที่อโคจร**: ซ่องโสเภณี โรงสุรา บ่อนการพนัน ฯลฯ
- **คิหิวิกัติ**: ห้ามใช้ของที่เป็นของคฤหัสถ์โดยเฉพาะ เช่น ผ้าลายดอกสีฉูดฉาด อาวุธ

## หน้าที่ของพุทธบริษัท

| ฝ่าย | หน้าที่ |
| **ภิกษุ ภิกษุณี** | ห้ามทำชั่ว · ให้ตั้งอยู่ในความดี · อนุเคราะห์ด้วยใจดี · ให้ได้ฟังสิ่งที่ไม่เคยฟัง · ทำสิ่งที่ฟังแล้วให้แจ่มแจ้ง · บอกทางสวรรค์ |
| **อุบาสก อุบาสิกา** | ทำ พูด คิด ต่อพระสงฆ์ด้วย**เมตตา** · ต้อนรับด้วยความเต็มใจ · อุปถัมภ์ด้วย**ปัจจัย 4** |
| **บริษัท 4 ร่วมกัน** | ==ศึกษา · ปฏิบัติ · เผยแผ่ · ปกป้อง== พระพุทธศาสนา |

### การปฏิบัติตนที่เหมาะสมต่อพระสงฆ์

- มี**สัมมาคารวะ** ลุกยืน ไหว้ หลีกทาง
- อยู่ในวัดด้วยความ**สงบเรียบร้อย** ไม่รบกวนพระสงฆ์
- ไม่ทำสิ่งที่ก่อความเสียหายแก่พระสงฆ์และพระศาสนา
`
},
{
title: "ธรรมเพื่อการครองตน",
text: `
## เบญจศีล – เบญจธรรม

!! **ศีล** แปลว่า ==ปกติ== · **เบญจศีล** = ข้อเว้นความชั่ว 5 ประการ · **เบญจธรรม (กัลยาณธรรม)** = ธรรมที่ทำให้เป็นคนดีงาม ประพฤติคู่กัน

| ข้อ | เบญจศีล (บาลี) | เว้นจาก | เบญจธรรม (คู่กัน) |
| 1 | ปาณาติปาตา เวรมณี | ฆ่าสัตว์ เบียดเบียน | ==เมตตากรุณา== |
| 2 | อทินนาทานา เวรมณี | ลักทรัพย์ | ==สัมมาอาชีวะ== |
| 3 | กาเมสุมิจฉาจารา เวรมณี | ประพฤติผิดในกาม | ==กามสังวร== (สำรวมในกาม) |
| 4 | มุสาวาทา เวรมณี | พูดเท็จ | ==สัจจะ== (ความสัตย์) |
| 5 | สุราเมรยมัชชปมาทัฏฐานา เวรมณี | ดื่มสุราเมรัย/สิ่งเสพติด | ==สติสัมปชัญญะ== |

- ศีลขั้นสูงกว่าศีล 5 เรียกว่า "วัตร" "ศีลวัตร" "ศีลพรต" — ฝึกถอนใจจากกามารมณ์
- ศีลของแต่ละบุคคล: คฤหัสถ์ **ศีล 5 หรือ 8** · สามเณร **ศีล 10** · ภิกษุ **227**

### ลักษณะของการพูดเท็จ (มุสาวาท) เช่น

**ปด** (โกหกชัด ๆ) · **ทนสาบาน** · **ทำเล่ห์กระเท่ห์** (อวดอ้างศักดิ์สิทธิ์) · **มารยา** (แสร้งทำ) · **ทำเลศ** (พูดเล่นสำนวนให้เข้าใจผิด) · **เสริมความ** (เรื่องเล็กทำเป็นใหญ่) · **อำความ** (เรื่องใหญ่ทำเป็นเล็ก)

## วิรัติ 3 — การเจตนางดเว้น

!! ศีลจะมีได้ต้องมี ==เจตนางดเว้น== แม้ไม่ได้ทำผิด แต่ไม่มีเจตนาเว้นก็ไม่นับว่ามีศีล

| วิรัติ | ความหมาย |
| **สัมปัตตวิรัติ** | งดเว้นเมื่อ**ประสบเหตุเฉพาะหน้า** (ไม่ได้ตั้งใจไว้ก่อน) |
| **สมาทานวิรัติ** | งดเว้นเพราะ**สมาทานศีลไว้ล่วงหน้า** |
| **สมุจเฉทวิรัติ** | งดเว้น**เด็ดขาด**ของพระอริยะผู้ตัดกิเลสแล้ว — มั่นคงที่สุด |

## หิริ – โอตตัปปะ (โลกปาลธรรม = ธรรมคุ้มครองโลก)

| ธรรม | ความหมาย |
| ==หิริ== | ความ**ละอาย**แก่ใจต่อความชั่ว |
| ==โอตตัปปะ== | ความ**เกรงกลัว**ต่อความชั่วและผลของความชั่ว |

- คนมีหิริโอตตัปปะ ไม่ทำชั่วทั้งในที่ลับและที่แจ้ง — กฎหมายอย่างเดียวทำให้สังคมสงบไม่ได้
- วิธีปลูกฝัง: เริ่มจาก**เคารพกฎหมายและระเบียบ** → ฝึก**เคารพตนเอง** ปกครองตนเอง

## สติ – สัมปชัญญะ (ธรรมมีอุปการะมาก)

| ธรรม | ความหมาย |
| ==สติ== | ความ**ระลึกได้** (ก่อนทำ ก่อนพูด ก่อนคิด) — ความไม่ประมาท |
| ==สัมปชัญญะ== | ความ**รู้ตัว**ขณะกำลังทำ พูด คิด |

- วิธีฝึก: ใคร่ครวญก่อนทำ · ป้องกันดีกว่าแก้ไข · โกรธอย่าเพิ่งพูด/ทำ · ห่างไกลสิ่งเสพติด การพนัน

## กตัญญูกตเวที

| คำ | ความหมาย |
| **บุพการี** | ผู้**ทำอุปการะก่อน** |
| **กตัญญู** | ==รู้==คุณที่ผู้อื่นทำแก่ตน |
| **กตเวที** | ==ตอบแทน==/ประกาศคุณที่ผู้อื่นทำแก่ตน |

!! บุคคลหาได้ยาก 2 จำพวก คือ **บุพการี** และ **กตัญญูกตเวที**

### ผู้มีอุปการคุณ 4 สาย

1. **ทางสกุล** — บิดามารดา (ปู่ย่าตายาย = บิดามารดาคู่ที่สอง)
2. **ทางการศึกษา** — ครูอาจารย์ (มีพระคุณรองจากบิดามารดา)
3. **ทางการปกครอง** — พระมหากษัตริย์ (ทรงบำเพ็ญทศพิธราชธรรม)
4. **ทางศาสนา** — พระศาสดา

## ขันติ – โสรัจจะ (ธรรมอันทำให้งาม)

| ธรรม | ความหมาย |
| ==ขันติ== | ความ**อดทน** — ต่อความลำบาก · ความเจ็บป่วย · ความเจ็บใจ · อำนาจกิเลส |
| ==โสรัจจะ== | ความ**สงบเสงี่ยม** อดทนได้อย่างสงบ ไม่โอ้อวด |

- มีขันติแต่ไม่มีโสรัจจะ = "งามเพียงครึ่งเดียว"

## ฆราวาสธรรม 4 (ธรรมของผู้ครองเรือน)

| ธรรม | ความหมาย |
| **สัจจะ** | ความ**ซื่อสัตย์** จริงใจ พูดจริง ทำจริง |
| **ทมะ** | การ**ฝึกตน ข่มใจ** ปรับปรุงตัว |
| **ขันติ** | ความ**อดทน** อดกลั้น |
| **จาคะ** | ความ**เสียสละ** แบ่งปัน ใจกว้าง |

## อกุศลมูล 3 – กุศลมูล 3

!! **อกุศลมูล** = ==รากเหง้าของความชั่ว== · **กุศลมูล** = รากเหง้าของความดี

| อกุศลมูล | ความหมาย | กุศลมูล (ตรงข้าม) | ธรรมที่ช่วย |
| **โลภะ** | อยากได้ในทางทุจริต | **อโลภะ** | จาคะ |
| **โทสะ** | คิดประทุษร้าย | **อโทสะ** | เมตตา |
| **โมหะ** | หลง ไม่รู้จริง | **อโมหะ** | ปัญญา |

## บุญกิริยาวัตถุ 3 (วิธีทำบุญ)

| วิธี | ความหมาย |
| ==ทานมัย== | ทำบุญด้วยการ**ให้** (สิ่งของ ความรู้ ธรรมะ) |
| ==ศีลมัย== | ทำบุญด้วยการ**รักษาศีล** |
| ==ภาวนามัย== | ทำบุญด้วยการ**อบรมจิต** (สมถะ วิปัสสนา) |

## การเสียสละ 3 ระดับ

1. สละ**ทรัพย์**เพื่อรักษา**อวัยวะ**
2. สละ**อวัยวะ**เพื่อรักษา**ชีวิต**
3. สละ**ทุกอย่าง**เพื่อรักษา==ธรรมะ==

## จริต 6 (พื้นเพของจิต)

| จริต | ลักษณะ |
| **ราคจริต** | รักสวยรักงาม |
| **โทสจริต** | ใจร้อน หงุดหงิด |
| **โมหจริต** | เขลา ซึม งมงาย |
| **สัทธาจริต** | เชื่อง่าย เลื่อมใสง่าย |
| **พุทธิจริต** | ชอบคิดพิจารณาด้วยปัญญา |
| **วิตกจริต** | กังวล คิดฟุ้งซ่าน |

## การตั้งสัจจะ 5 สถาน

**ในหน้าที่** (รักษา บำรุงหน้าที่) · **ในการงาน** (ทำให้ดี เต็มที่ เสร็จ) · **ในวาจา** (ทำได้ตามที่พูด) · **ในบุคคล** (กตัญญู ภักดี เมตตา ซื่อตรง) · **ในความดี** (ทำดี ปรับปรุงตน สนับสนุนคนดี)
`
},
{
title: "ธรรมเพื่อการครองคนและครองงาน",
text: `
## พรหมวิหาร 4 (ธรรมของผู้ใหญ่)

!! ผู้ใหญ่ต้อง **บำรุงสุข บำบัดทุกข์ สนับสนุนความก้าวหน้า และปกครองโดยยุติธรรม** แก่ผู้น้อย — จึงต้องมีพรหมวิหาร 4

| ธรรม | ความหมาย |
| ==เมตตา== | ปรารถนาให้ผู้อื่น**มีความสุข** |
| ==กรุณา== | ปรารถนาให้ผู้อื่น**พ้นทุกข์** |
| ==มุทิตา== | **ยินดี**เมื่อผู้อื่นได้ดี |
| ==อุเบกขา== | **วางใจเป็นกลาง** ไม่ลำเอียง |

- วิธีปกครอง 2 อย่าง: ==ปัคคหะ== (ยกย่องคนดี) และ ==นิคคหะ== (ข่ม/ตำหนิคนผิด)

## สังคหวัตถุ 4 (ธรรมยึดเหนี่ยวใจคน)

| ธรรม | ความหมาย |
| **ทาน** | การให้ แบ่งปัน (ให้คนที่ควรให้ ให้สิ่งที่ควรให้ ให้ด้วยเจตนาบริสุทธิ์) |
| **ปิยวาจา** | พูดจาอ่อนหวาน สุภาพ |
| **อัตถจริยา** | ประพฤติสิ่งเป็นประโยชน์ ช่วยเหลือ |
| **สมานัตตตา** | วางตนเสมอต้นเสมอปลาย ไม่ถือตัว |

## อคติ 4 (ความลำเอียง)

| อคติ | ลำเอียงเพราะ |
| **ฉันทาคติ** | ==รัก/ชอบ== |
| **โทสาคติ** | ==ชัง/โกรธ== |
| **โมหาคติ** | ==หลง/ไม่รู้== |
| **ภยาคติ** | ==กลัว== |

## กัลยาณมิตรธรรม 7 (คุณสมบัติของมิตรแท้/ผู้แนะนำที่ดี)

1. **ปิโย** — น่ารัก
2. **ครุ** — น่าเคารพ
3. **ภาวนีโย** — น่ายกย่อง
4. **วัตตา** — รู้จักพูดให้ได้ผล
5. **วจนักขโม** — อดทนต่อถ้อยคำ
6. **คัมภีรัญจะ กถัง กัตตา** — แถลงเรื่องล้ำลึกได้
7. **โน จัฏฐาเน นิโยชเย** — ไม่ชักนำในทางเสื่อม

## อธิปไตย 3 (ความเป็นใหญ่)

| อธิปไตย | ความหมาย |
| **อัตตาธิปไตย** | ถือ**ตน**เป็นใหญ่ |
| **โลกาธิปไตย** | ถือ**โลก/ความนิยมของคนส่วนใหญ่**เป็นใหญ่ |
| **ธัมมาธิปไตย** | ถือ**ธรรม (ความถูกต้อง)** เป็นใหญ่ |

!! ผู้นำ/นักปกครองพึงถือ ==ธัมมาธิปไตย== — ประโยชน์ทั้งสองฝ่าย (ตนเองและผู้อื่น)

## ทศพิธราชธรรม 10 (ธรรมของนักปกครอง)

| ข้อ | ธรรม | ความหมาย |
| 1 | **ทาน** | การให้ เอื้อเฟื้อ |
| 2 | **ศีล** | ประพฤติดีงาม เคร่งครัดในระเบียบ |
| 3 | **ปริจจาคะ** | การเสียสละ |
| 4 | **อาชชวะ** | ความซื่อตรง |
| 5 | **มัททวะ** | ความอ่อนโยน |
| 6 | **ตปะ** | ความเพียร ข่มกิเลส |
| 7 | **อักโกธะ** | ความไม่โกรธ |
| 8 | **อวิหิงสา** | ความไม่เบียดเบียน |
| 9 | **ขันติ** | ความอดทน |
| 10 | **อวิโรธนะ** | ความไม่คลาดจากธรรม/ความถูกต้อง |

## อิทธิบาท 4 (ทางแห่งความสำเร็จ)

!! **อิทธิ** = ความสำเร็จ · **บาท** = ทาง/เครื่องนำไปสู่ — ต้องมี**ครบทั้ง 4** งานจึงสำเร็จ

| ธรรม | ความหมาย | คำจำง่าย |
| ==ฉันทะ== | ความ**พอใจ**รักใคร่ในงาน | พอใจทำ |
| ==วิริยะ== | ความ**เพียร** ไม่ท้อถอย | แข็งใจทำ |
| ==จิตตะ== | ความ**เอาใจใส่** จดจ่อ | ตั้งใจทำ |
| ==วิมังสา== | การ**พิจารณาไตร่ตรอง** ตรวจสอบหาเหตุผล | เข้าใจทำ |

- ขั้นตอนทำงาน: **วางแผน → ทำตามแผน → ตรวจผล** — ทำงาน "ด้วยสมอง" ไม่ใช่แค่ใช้กำลัง

## ทิฏฐธัมมิกัตถประโยชน์ 4 (หัวใจเศรษฐี "อุ อา กะ สะ")

!! ประโยชน์ในปัจจุบัน — ==ขยันหา รักษาดี มีกัลยาณมิตร ใช้ชีวิตเหมาะสม==

| ธรรม | ความหมาย |
| **อุฏฐานสัมปทา** | ถึงพร้อมด้วย**ความขยัน** |
| **อารักขสัมปทา** | ถึงพร้อมด้วย**การรักษา** (ทรัพย์ หน้าที่ วิชา) |
| **กัลยาณมิตตตา** | **คบคนดี**เป็นมิตร |
| **สมชีวิตา** | **เลี้ยงชีพพอเหมาะ** ใช้จ่ายสมกับรายได้ |

## สุขของคฤหัสถ์ 4

| สุข | เกิดจาก |
| **อัตถิสุข** | การ**มีทรัพย์** |
| **โภคสุข** | การ**ใช้จ่ายทรัพย์** |
| **อนณสุข** | การ**ไม่เป็นหนี้** |
| **อนวัชชสุข** | การ**ประกอบอาชีพสุจริต** ไม่มีโทษ — สำคัญที่สุด |

### โภคอาทิยะ 5 (หลักการใช้ทรัพย์ แบ่งทรัพย์ 5 ส่วน)

1. เลี้ยงตนเอง บิดามารดา บุตรภรรยา คนในปกครอง
2. เลี้ยงมิตรสหาย
3. ป้องกันอันตราย
4. ทำ==พลี 5== : **ญาติพลี** (สงเคราะห์ญาติ) · **อติถิพลี** (ต้อนรับแขก) · **ปุพพเปตพลี** (ทำบุญอุทิศผู้ตาย) · **ราชพลี** (เสียภาษี) · **เทวตาพลี** (บูชาเทวดา)
5. บำรุงสมณพราหมณ์ผู้ประพฤติชอบ

## มิตรแท้ 4 – มิตรเทียม 4

| มิตรแท้ | ลักษณะ |
| **มิตรมีอุปการะ** | ป้องกันเพื่อนเมื่อประมาท ป้องกันทรัพย์เพื่อน เป็นที่พึ่งยามภัย ช่วยออกทรัพย์ |
| **มิตรร่วมสุขร่วมทุกข์** | บอกความลับ ปิดความลับเพื่อน ไม่ทิ้งยามวิบัติ สละชีวิตแทนได้ |
| **มิตรแนะประโยชน์** | ห้ามทำชั่ว แนะให้ทำดี ให้ฟังสิ่งไม่เคยฟัง บอกทางสวรรค์ |
| **มิตรมีความรักใคร่** | ทุกข์ด้วย สุขด้วย ต้านคนติเตียนเพื่อน รับรองคนชมเพื่อน |

| มิตรเทียม | ลักษณะ |
| **คนปอกลอก** | คิดเอาแต่ได้ เสียน้อยหวังมาก คบเพราะเห็นแก่ประโยชน์ |
| **คนดีแต่พูด** | อ้างของล่วงแล้ว/ยังไม่มาปราศรัย ออกปากพึ่งไม่ได้ |
| **คนหัวประจบ** | คล้อยตามทั้งดีและชั่ว ต่อหน้าสรรเสริญ ลับหลังนินทา |
| **คนชักชวนในทางฉิบหาย** | ชวนดื่มน้ำเมา เที่ยวกลางคืน มัวเมาการเล่น เล่นการพนัน |

- **มิตร** = คนคุ้นเคยรักใคร่สนิทสนม · **สหาย** = คนที่เคยเห็นเคยร่วมงาน → มิตรสำคัญกว่าสหาย
`
},
{
title: "ธรรมในครอบครัวและสังคม",
text: `
## ทิศ 6 (หลักมนุษยสัมพันธ์ — สิงคาลกสูตร)

| ทิศ | บุคคล | เหตุผล |
| **ปุรัตถิมทิศ** (เบื้องหน้า) | ==บิดามารดา== | มีอุปการะแก่เรา**ก่อน** |
| **ทักษิณทิศ** (เบื้องขวา) | ==ครูอาจารย์== | ควรแก่การบูชาคุณ |
| **ปัจฉิมทิศ** (เบื้องหลัง) | ==บุตรภรรยา (สามีภรรยา)== | มีขึ้น**ภายหลัง** เป็นกำลังหนุนหลัง |
| **อุตตรทิศ** (เบื้องซ้าย) | ==มิตรสหาย== | ช่วยให้ข้ามพ้นอุปสรรค |
| **เหฏฐิมทิศ** (เบื้องล่าง) | ==คนรับใช้ ลูกจ้าง== | เป็นฐานกำลังช่วยงาน |
| **อุปริมทิศ** (เบื้องบน) | ==พระสงฆ์ สมณพราหมณ์== | สูงด้วยคุณธรรม ผู้นำทางจิตใจ |

### หน้าที่ต่อกันที่ออกสอบบ่อย

- **บุตร → บิดามารดา**: เลี้ยงท่านตอบ · ช่วยทำงานของท่าน · ดำรงวงศ์สกุล · ประพฤติให้สมเป็นทายาท · ทำบุญอุทิศให้เมื่อท่านล่วงลับ
- **บิดามารดา → บุตร**: ห้ามทำชั่ว · ให้ตั้งอยู่ในความดี · ให้ศึกษา · หาคู่ครองที่สมควร · มอบทรัพย์ให้ในเวลาอันควร
- **ศิษย์ → ครู**: ลุกต้อนรับ · เข้าไปหา (คอยรับใช้ ปรึกษา) · ใฝ่ใจเรียน · ปรนนิบัติ · เรียนโดยเคารพ
- **ครู → ศิษย์**: แนะนำดี · สอนให้เข้าใจแจ่มแจ้ง · สอนวิชาให้สิ้นเชิง · ยกย่องให้ปรากฏ · สร้างเครื่องคุ้มภัยในทิศทั้งหลาย
- **นาย → ลูกจ้าง**: ให้งานตามกำลัง · ให้ค่าจ้างสมควร · รักษาพยาบาลยามเจ็บไข้ · แบ่งของแปลก ๆ ให้ · ให้หยุดพักตามโอกาส
- **ลูกจ้าง → นาย**: ==เริ่มงานก่อนนาย · เลิกงานหลังนาย== · เอาแต่ของที่นายให้ · ทำงานให้ดีขึ้น · นำคุณของนายไปเผยแพร่
- **คฤหัสถ์ → พระสงฆ์**: ทำ พูด คิดด้วยเมตตา · ต้อนรับเต็มใจ · อุปถัมภ์ด้วยปัจจัย 4
- **พระสงฆ์ → คฤหัสถ์**: ห้ามทำชั่ว · ให้ตั้งในความดี · อนุเคราะห์ด้วยใจงาม · ให้ได้ฟังสิ่งที่ไม่เคยฟัง · ทำสิ่งที่เคยฟังให้แจ่มแจ้ง · บอกทางสวรรค์

## อบายมุข (ทางแห่งความเสื่อม)

### อบายมุข 4

**อิตถีธุตตะ** (นักเลงหญิง) · **สุราธุตตะ** (นักเลงสุรา) · **อักขธุตตะ** (นักเลงการพนัน) · **ปาปมิตตะ** (คบคนชั่ว)

### อบายมุข 6 และโทษ

| อบายมุข | โทษสำคัญ |
| **ติดสุราและของมึนเมา** | เสียทรัพย์ · ก่อการทะเลาะ · เกิดโรค · เสียชื่อเสียง · ไม่รู้อาย · ==ทอนกำลังปัญญา== |
| **เที่ยวกลางคืน** | ไม่รักษาตัว ลูกเมีย ทรัพย์ · เป็นที่ระแวง · ถูกใส่ความ |
| **เที่ยวดูการละเล่น** | การงานเสื่อมเพราะใจจดจ่อ เสียเวลา |
| **เล่นการพนัน** | ชนะก่อเวร แพ้เสียดาย · ไม่มีใครเชื่อถือคำพูด · ไม่มีใครอยากให้เป็นคู่ครอง |
| **คบคนชั่ว** | พาให้เป็นนักเลงการพนัน นักเลงเหล้า นักเลงหญิง นักหลอกลวง |
| **เกียจคร้านทำงาน** | อ้างว่า หนาวนัก ร้อนนัก เย็นแล้ว เช้าอยู่ หิวนัก อิ่มนัก |

## โลกธรรม 8 (เรื่องของโลกที่ทุกคนต้องพบ)

| ฝ่ายน่าปรารถนา (อิฏฐารมณ์) | ฝ่ายไม่น่าปรารถนา (อนิฏฐารมณ์) |
| ได้ลาภ | เสื่อมลาภ |
| ได้ยศ | เสื่อมยศ |
| สรรเสริญ | นินทา |
| สุข | ทุกข์ |

- **ยศ** มี 3: อิสริยยศ (ยิ่งด้วยอำนาจ) · บริวารยศ (ยิ่งด้วยพวกพ้อง) · เกียรติยศ (ยิ่งด้วยชื่อเสียง)

## วัฒนธรรม

!! **วัฒนธรรม** แปลว่า ==สภาพเครื่องทำให้เจริญ== — รากฐานมาจาก**ศาสนา ลัทธิ และขนบประเพณี**

### วัฒนธรรมไทย 4 แขนง

| แขนง | ความหมาย | ตัวอย่าง |
| ==คติธรรม== | ความประพฤติที่มี**หลักธรรม**เป็นแนวดำเนินชีวิต | อดทน ให้อภัย ออมทรัพย์ เสียสละ บูชาความยุติธรรม |
| ==เนติธรรม== | ความประพฤติที่**เคารพกฎหมายและระเบียบวินัย** | รู้สิทธิหน้าที่ ไม่ทำบัตรสนเท่ห์ เชื่อฟังเจ้าหน้าที่ |
| ==วัตถุธรรม== | ความประพฤติที่ดีใน**ความเป็นอยู่** (ปัจจัย 4) | แต่งกายสะอาด ที่อยู่เป็นระเบียบ ไม่ทิ้งขยะในที่สาธารณะ |
| ==สหธรรม== | ความประพฤติที่เหมาะสมในการ**อยู่ร่วมกัน** | มีสมบัติผู้ดี สุภาพ ไม่ส่งเสียงดังรบกวน สามัคคี |

- อีกแบบหนึ่งแบ่งเป็น 2: **วัฒนธรรมทางวัตถุ** (สถาปัตยกรรม ประติมากรรม จิตรกรรม) และ **ทางจิตใจ** (ภาษา วรรณคดี ประเพณี)
- คุณของการมีวัฒนธรรม: มีสุข สังคมนับถือ หมู่คณะเจริญ / โทษของการขาด: เสื่อม ถูกรังเกียจ

## บุตร 3 ประเภท

| บุตร | ลักษณะ |
| ==อภิชาตบุตร (อติชาตบุตร)== | ดีกว่าบิดามารดา |
| **อนุชาตบุตร** | เสมอบิดามารดา |
| **อวชาตบุตร** | ต่ำกว่า/เลวกว่าบิดามารดา |

## ภรรยา 7 ประเภท

| ภรรยา | เปรียบเหมือน |
| **วธกาภริยา** | เพชฌฆาต (คิดร้ายต่อสามี) |
| **โจรีภริยา** | โจร (ผลาญทรัพย์) |
| **อัยยาภริยา** | นาย (เกียจคร้าน ปากร้าย ข่มสามี) |
| **มาตาภริยา** | ==มารดา== (ห่วงใย ปกป้อง รักษาทรัพย์) |
| **ภคินีภริยา** | ==น้องสาว== (เคารพรัก อ่อนโยน) |
| **สขีภริยา** | ==เพื่อน== (ยินดีเมื่อพบ มีมารยาทดี) |
| **ทาสีภริยา** | ทาส (ยอมอยู่ใต้อำนาจ ถูกข่มก็ไม่โกรธ) |

- 3 ประเภทแรก = ภรรยาที่ไม่ดี · 4 ประเภทหลัง = ภรรยาที่ดี

## หญิงต้องห้าม (ศีลข้อ 3)

**หญิงมีสามี** · **หญิงที่มีญาติปกครอง** · **หญิงที่จารีต/กฎหมายคุ้มครอง** (เช่น ญาติสืบสายโลหิต นักบวช)
`
},
{
title: "วันสำคัญและศาสนพิธี",
text: `
## วันสำคัญทางพระพุทธศาสนา

!! วันสำคัญประจำปี 3 วันหลักที่มีการ ==เวียนเทียน== คือ **มาฆบูชา วิสาขบูชา อาสาฬหบูชา** (+ **อัฏฐมีบูชา** แรม 8 ค่ำ เดือน 6 วันถวายพระเพลิง)

| วัน | วันที่ | ความสำคัญ |
| ==มาฆบูชา== | ขึ้น 15 ค่ำ **เดือน 3** | **จาตุรงคสันนิบาต** · แสดง**โอวาทปาติโมกข์** ณ วัดเวฬุวัน · ไทยเริ่มจัดสมัย **ร.4 (พ.ศ. 2394)** ที่วัดพระแก้ว |
| ==วิสาขบูชา== | ขึ้น 15 ค่ำ **เดือน 6** | **ประสูติ ตรัสรู้ ปรินิพพาน** · UN รับรองเป็นวันสำคัญสากล (15 ธ.ค. 2542) · ฟื้นฟูในไทยสมัย **ร.2** |
| ==อาสาฬหบูชา== | ขึ้น 15 ค่ำ **เดือน 8** | **ปฐมเทศนา** · พระสงฆ์องค์แรก · **พระรัตนตรัยครบ 3** · คณะสงฆ์ประกาศเป็นวันสำคัญ **พ.ศ. 2501** |
| **อัฏฐมีบูชา** | แรม 8 ค่ำ เดือน 6 | ถวายพระเพลิงพระพุทธสรีระ |

### การเวียนเทียน

- เวียนแบบ ==ประทักษิณ== = **เวียนขวา** (ตามเข็มนาฬิกา) ให้สิ่งเคารพอยู่ทางขวามือ **3 รอบ**
- รอบ 1 ระลึกพระพุทธคุณ · รอบ 2 พระธรรมคุณ · รอบ 3 พระสังฆคุณ

## วันเข้าพรรษา – ออกพรรษา

- **เข้าพรรษา** = ภิกษุอยู่ประจำที่ตลอด **3 เดือนฤดูฝน** ไม่ค้างแรมที่อื่น
- **สาเหตุ**: ภิกษุจาริกในฤดูฝน ชาวบ้าน**ติเตียนว่าเหยียบข้าวกล้าและสัตว์เล็ก**เสียหาย

| พรรษา | เข้าพรรษา | ออกพรรษา |
| ==ปุริมพรรษา== (พรรษาต้น) | **แรม 1 ค่ำ เดือน 8** (วันถัดจากอาสาฬหบูชา) | **ขึ้น 15 ค่ำ เดือน 11** |
| ==ปัจฉิมพรรษา== (พรรษาหลัง) | **แรม 1 ค่ำ เดือน 9** | **ขึ้น 15 ค่ำ เดือน 12** |

- ชาวพุทธ: ทำบุญตักบาตร ฟังธรรม **รักษาศีลเคร่งครัด งดอบายมุข** ถวาย**เทียนพรรษา**
- **วันออกพรรษา** = ==วันมหาปวารณา== — ภิกษุ**ปวารณา**ให้ภิกษุอื่นว่ากล่าวตักเตือนได้
- วันรุ่งขึ้นหลังออกพรรษา (แรม 1 ค่ำ เดือน 11) มีประเพณี**ตักบาตรเทโวโรหณะ**

## การแสดงความเคารพ

### การไหว้ 4 ระดับ

| ไหว้ใคร | ตำแหน่งมือ |
| **พระรัตนตรัย / พระสงฆ์** | ==หัวแม่มือจรดระหว่างคิ้ว== ปลายนิ้วแนบหน้าผาก |
| **บิดามารดา ครูอาจารย์ ผู้มีพระคุณ** | ==หัวแม่มือจรดปลายจมูก== |
| **ผู้ที่เคารพทั่วไป / ผู้อาวุโส** | ==หัวแม่มือจรดปลายคาง== |
| **ผู้เสมอกัน (รับไหว้)** | ==ประนมมือระดับอก== ไม่ต้องก้มศีรษะ |

### การกราบ

- **กราบพระ** = ==เบญจางคประดิษฐ์== 3 ครั้ง — อวัยวะ 5 จรดพื้น: **เข่า 2 มือ 2 หน้าผาก 1**
  - จังหวะ: **อัญชลี** (ประนมมือระดับอก) → **วันทา** (ยกมือจรดหน้าผาก) → **อภิวาท** (กราบลง)
  - ชาย: ข้อศอก**ต่อ**เข่า / หญิง: ข้อศอก**คร่อม**เข่า
- **กราบคน/ศพคน** = หมอบกราบ**ครั้งเดียว** แบบ**ไม่แบมือ** (มือประนมตั้งกับพื้น หน้าผากจรดสันมือ)

## การจุดธูปเทียนและเครื่องบูชา

- จุดเทียน: **เล่มขวาของพระพุทธรูปก่อน** แล้วจึงเล่มซ้าย
- ธูป 3 ดอก: จุดดอกทางขวาของพระพุทธรูปไปทางซ้าย

| เครื่องบูชา | บูชา |
| **ธูป** | ==พระพุทธคุณ== (3 ดอก = ปัญญาคุณ วิสุทธิคุณ กรุณาคุณ) |
| **เทียน** | ==พระธรรม== (แสงสว่างส่องใจ) |
| **ดอกไม้** | ==พระสงฆ์== (เป็นระเบียบ งดงาม) |

| จำนวนธูป | บูชา |
| **1 ดอก** | ศพ |
| **3 ดอก** | พระรัตนตรัย |
| **5 ดอก** | พระรัตนตรัย + บิดามารดา + ครูอาจารย์ (หรือพระพุทธเจ้า 5 พระองค์) |
| **7 ดอก** | โพชฌงค์ 7 / วันทั้ง 7 |
| **9 ดอก** | พระพุทธคุณ 9 / พระภูมิ |

## ศาสนพิธีเบื้องต้น

- **โต๊ะหมู่บูชา**: ตั้งทาง**ขวาของอาสน์สงฆ์** หันหน้าทางเดียวกับพระสงฆ์ — นิยมหัน**ทิศตะวันออก** ไม่นิยมทิศตะวันตก · พระพุทธรูปตั้งบน**โต๊ะตัวสูงสุด** อัญเชิญโดยยก**ที่ฐาน**
- **วงด้ายสายสิญจน์**: เริ่มที่**ฐานพระพุทธรูป** เวียน**ขวา** — ห้ามข้าม ให้ยกลอด
- **การกรวดน้ำ**: เริ่มเมื่อพระสวด **"ยถา วาริวหา..."** ให้เสร็จเมื่อจบ **"...มณิโชติรโส ยถา"** แล้วเทน้ำที่**โคนต้นไม้/พื้นดินสะอาด**
  - คำกรวดน้ำย่อ: **"อิทัง เม ญาตีนัง โหตุ สุขิตา โหนตุ ญาตะโย"**
- **นิมนต์พระ**: งานมงคลนิยม **5, 7, 9 รูป** (คี่) · งาน**มงคลสมรส**นิยมจำนวน**คู่** · พิธีหลวง **10 รูป**
  - นิมนต์ฉัน ห้ามระบุชื่ออาหาร (ข้าวสุก ขนม ปลา เนื้อ) ใช้คำว่า "นิมนต์ฉันเช้า/เพล"

## คำอาราธนา 3 แบบ (ออกสอบบ่อยมาก)

| อาราธนา | ขึ้นต้นด้วย | ใช้เมื่อ |
| ==อาราธนาศีล== | **"มะยัง ภันเต วิสุง วิสุง รักขะณัตถายะ ติสะระเณนะ สะหะ ปัญจะ สีลานิ ยาจามะ"** | ขอศีล 5 |
| ==อาราธนาพระปริตร== | **"วิปัตติปะฏิพาหายะ สัพพะสัมปัตติสิทธิยา..."** | นิมนต์สวดมนต์ (เจริญพระพุทธมนต์) |
| ==อาราธนาธรรม== | **"พรัหมา จะ โลกาธิปะตี สะหัมปะติ..."** | นิมนต์แสดงธรรม (เทศน์) |

- พิธีราชการ: ผู้อาราธนา**ยืน**กล่าว / พิธีเอกชน: **นั่งคุกเข่า**กราบแล้วกล่าว

## การแสดงตนเป็นพุทธมามกะ

- ถวายสักการะ → จุดธูปเทียน → กล่าวคำปฏิญาณ **"เอสาหัง ภันเต สุจิระปะรินิพพุตัมปิ..."** → รับศีล
- **พุทธมามกะ** = ผู้ถือพระพุทธเจ้าเป็นของตน (ชาย) / **พุทธมามิกา** (หญิง)

## ระเบียบไหว้พระสวดมนต์ (แบบธรรมเนียมทหาร)

**บทกราบพระ (อะระหัง...)** → **นะโม 3 จบ** → **พุทธคุณ (อิติปิ โส)** → **ธรรมคุณ (สวากขาโต)** → **สังฆคุณ (สุปะฏิปันโน)** → **แผ่เมตตา** → **บทปลงใจ** ("ชาติของเราเป็นไทยอยู่ได้...")

## หน้าที่และกิจวัตรของชาวพุทธ

- ไปวัดตามโอกาส · ฟังธรรม · รักษาศีล · ฟังธรรมด้วยจิตเป็นกุศล · ทำบุญตามหลักพุทธศาสนา · ทำนุบำรุงพระศาสนา
- **หน้าที่ชาวพุทธ**: ศึกษา ปฏิบัติ เผยแผ่ และปกป้องพระพุทธศาสนา
- **ปฏิบัติในวันสำคัญ**: บูชาพระรัตนตรัย · ทำบุญตักบาตร · ช่วยชีวิตคนและสัตว์ (ปล่อยนกปล่อยปลา) · รักษาศีล ฟังธรรม เจริญสมาธิ

!! พระพุทธศาสนาเป็นศาสนาประจำชาติไทยตั้งแต่ ==สมัยสุโขทัย== เป็นรากฐานของวัฒนธรรมไทย
`
},
{
title: "การบริหารจิตและเจริญปัญญา (กรรมฐาน)",
text: `
## จิตภาวนา

!! **การบำเพ็ญจิตภาวนา** = การฝึก**สติ**และ**สมาธิ** เพื่อให้เกิด==ปัญญา== — หลักพัฒนาปัญญา 3: **การฟัง การคิด การปฏิบัติ**

- **การฝึกสติ** = ควบคุมความคิดให้ระลึกอยู่เสมอว่ากำลังทำอะไร
- **การฝึกสมาธิ** = ควบคุมจิตให้จดจ่ออยู่กับสิ่งเดียว
- สติสัมปชัญญะกับสมาธิสัมพันธ์กันมาก

## กรรมฐาน 2 ประเภท

| กรรมฐาน | จุดมุ่งหมาย |
| ==สมถกรรมฐาน== | อุบายทำให้**ใจสงบ** (เกิดสมาธิ) จิตเกาะอารมณ์เดียว |
| ==วิปัสสนากรรมฐาน== | อุบายทำให้**เกิดปัญญา**เห็นแจ้ง — เห็นรูปนาม เห็นไตรลักษณ์ มรรค ผล นิพพาน |

- **อานาปานสติ** = การกำหนดลมหายใจเข้า–ออก (สมาธิเบื้องต้น)
- หลักใหญ่ในการปฏิบัติวิปัสสนา 3: **อาตาปี** (เพียรเผากิเลส) · **สติมา** (มีสติ) · **สัมปชาโน** (มีสัมปชัญญะ)
- การเรียนวิปัสสนา 2 แบบ: **เรียนอันดับ** (เรียนปริยัติก่อน) · **เรียนสันโดษ** (เรียนแล้วปฏิบัติทันที)

## สติปัฏฐาน 4 (ฐานที่ตั้งของสติ)

| สติปัฏฐาน | พิจารณา |
| ==กายานุปัสสนา== | **กาย** — ลมหายใจ อิริยาบถ ความเป็นปฏิกูล ธาตุ 4 ป่าช้า 9 |
| ==เวทนานุปัสสนา== | **เวทนา** — สุข ทุกข์ อุเบกขา |
| ==จิตตานุปัสสนา== | **จิต** — จิตมีราคะ โทสะ โมหะ หรือไม่ (16 อย่าง) |
| ==ธัมมานุปัสสนา== | **ธรรม** — นิวรณ์ 5 ขันธ์ 5 อายตนะ โพชฌงค์ 7 อริยสัจ 4 |

## การเดินจงกรม

- เริ่มด้วย **"ยืนหนอ" 5 ครั้ง** มือขวาจับข้อมือซ้ายไว้ด้านหลัง ทอดสายตาประมาณ 4 ศอก
- กลับตัว: **"กลับหนอ" 4 ครั้ง**

| ระยะ | คำกำหนด |
| 1 | ขวาย่างหนอ – ซ้ายย่างหนอ |
| 2 | ยกหนอ – เหยียบหนอ |
| 3 | ยกหนอ – ย่างหนอ – เหยียบหนอ |
| 4 | ยกส้นหนอ – ยกหนอ – ย่างหนอ – เหยียบหนอ |
| 5 | ยกส้นหนอ – ยกหนอ – ย่างหนอ – ลงหนอ – ถูกหนอ |
| 6 | ยกส้นหนอ – ยกหนอ – ย่างหนอ – ลงหนอ – ถูกหนอ – กดหนอ |

### อานิสงส์การเดินจงกรม 5

1. อดทนต่อการเดินทางไกล
2. อดทนต่อความเพียร
3. มีอาพาธน้อย
4. ย่อยอาหารได้ดี
5. สมาธิที่ได้ขณะเดินตั้งอยู่ได้นาน

## การนั่งกำหนด

- นั่ง**ขัดสมาธิ (ขาขวาทับขาซ้าย)** ตัวตรง หลับตา
- สติจับที่**ท้อง**: หายใจเข้า "**พองหนอ**" – หายใจออก "**ยุบหนอ**"
- มีเวทนา → กำหนด "ปวดหนอ / เมื่อยหนอ" · จิตฟุ้ง → ตั้งสติที่ลิ้นปี่ กำหนด "**คิดหนอ**"
- ตาเห็น → "เห็นหนอ" · หูได้ยิน → "เสียงหนอ" · ไม่ทันกำหนด → "รู้หนอ"

## ปลิโพธ 10 (ความกังวลที่ต้องตัด)

ห่วง**ที่อยู่** · **ตระกูล** · **ลาภ** · **หมู่คณะ** · **การงาน** · **การเดินทาง** · **ญาติ** · **โรค** · **การเรียน** · **การแสดงฤทธิ์**

## ประโยชน์ของวิปัสสนากรรมฐาน (ตามพระไตรปิฎก)

1. ทำกาย วาจา ใจให้**บริสุทธิ์**
2. ดับ**ความเศร้าโศก**
3. ดับ**ทุกข์กายทุกข์ใจ**
4. เพื่อบรรลุ**มรรคผล**
5. เพื่อทำ**นิพพาน**ให้แจ้ง
`
}
],
      quizzes: [
        {"id": "rel-src", "title": "แบบทดสอบพระพุทธศาสนา (จากไฟล์ ๑๙ ข้อ)", "name": "แบบทดสอบพระพุทธศาสนา ๑๙ ข้อ", "group": "ข้อสอบจากไฟล์", "count": 19, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-01", "title": "ชุดที่ ๑ · ความรู้ทั่วไปเกี่ยวกับศาสนา", "name": "ทบทวน · ความรู้ทั่วไปเกี่ยวกับศาสนา", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 15, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-02", "title": "ชุดที่ ๒ · ศาสนาพราหมณ์ คริสต์ อิสลาม", "name": "ทบทวน · ศาสนาพราหมณ์ คริสต์ อิสลาม", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 22, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-03", "title": "ชุดที่ ๓ · พุทธประวัติ ๑ (ประสูติ – ตรัสรู้)", "name": "ทบทวน · พุทธประวัติ ๑ (ประสูติ – ตรัสรู้)", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 20, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-04", "title": "ชุดที่ ๔ · พุทธประวัติ ๒ (ประกาศศาสนา – ปรินิพพาน)", "name": "ทบทวน · พุทธประวัติ ๒ (ประกาศศาสนา – ปรินิพพาน)", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 22, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-05", "title": "ชุดที่ ๕ · พระรัตนตรัย อริยสัจ และหลักธรรมหลัก", "name": "ทบทวน · พระรัตนตรัย อริยสัจ และหลักธรรมหลัก", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 21, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-06", "title": "ชุดที่ ๖ · พระพุทธศาสนาหลังพุทธกาลและในประเทศไทย", "name": "ทบทวน · พระพุทธศาสนาหลังพุทธกาลและในประเทศไทย", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 27, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-07", "title": "ชุดที่ ๗ · พระสงฆ์และพระวินัย", "name": "ทบทวน · พระสงฆ์และพระวินัย", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 17, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-08", "title": "ชุดที่ ๘ · ธรรมเพื่อการครองตน", "name": "ทบทวน · ธรรมเพื่อการครองตน", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 20, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-09", "title": "ชุดที่ ๙ · ธรรมเพื่อการครองคนและครองงาน", "name": "ทบทวน · ธรรมเพื่อการครองคนและครองงาน", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 22, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-10", "title": "ชุดที่ ๑๐ · ธรรมในครอบครัวและสังคม", "name": "ทบทวน · ธรรมในครอบครัวและสังคม", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 19, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-11", "title": "ชุดที่ ๑๑ · วันสำคัญและศาสนพิธี", "name": "ทบทวน · วันสำคัญและศาสนพิธี", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 23, "file": "religion-quiz.js", "labels": "kk"},
        {"id": "rel-12", "title": "ชุดที่ ๑๒ · การบริหารจิตและเจริญปัญญา", "name": "ทบทวน · การบริหารจิตและเจริญปัญญา", "group": "แบบฝึกทบทวนตามบทสรุป", "count": 15, "file": "religion-quiz.js", "labels": "kk"}
      ]
    }
  ]
};
