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
          title: "ชนิดของคำในภาษาไทย",
          text: `
คำในภาษาไทยแบ่งตามหน้าที่ได้ **๗ ชนิด**

- **คำนาม** ชื่อคน สัตว์ สิ่งของ สถานที่ เช่น ครู แมว โรงเรียน
- **คำสรรพนาม** ใช้แทนคำนาม เช่น ฉัน เขา เธอ
- **คำกริยา** แสดงอาการหรือการกระทำ เช่น เดิน กิน นอน
- **คำวิเศษณ์** ขยายคำอื่นให้ชัดเจนขึ้น เช่น สวย เร็ว มาก
- **คำบุพบท** นำหน้าคำเพื่อบอกความสัมพันธ์ เช่น ใน บน ของ แก่
- **คำสันธาน** เชื่อมคำหรือประโยค เช่น และ แต่ เพราะ
- **คำอุทาน** แสดงอารมณ์ความรู้สึก เช่น โอ๊ย ว้าว

> คำว่า "ของ" เป็นคำบุพบท ส่วน "และ" เป็นคำสันธาน
`
        }
      ],
      quizzes: [
        {
          id: "thai-1",
          title: "ข้อสอบชุดที่ ๑",
          shuffle: true,
          questions: [
            { q: "คำในภาษาไทยแบ่งตามหน้าที่ได้กี่ชนิด", choices: ["๕ ชนิด", "๖ ชนิด", "๗ ชนิด", "๘ ชนิด"], answer: 2, explain: "คำไทยมี ๗ ชนิด ได้แก่ นาม สรรพนาม กริยา วิเศษณ์ บุพบท สันธาน และอุทาน" },
            { q: "คำว่า \"เพราะ\" เป็นคำชนิดใด", choices: ["คำบุพบท", "คำสันธาน", "คำวิเศษณ์", "คำกริยา"], answer: 1, explain: "\"เพราะ\" ใช้เชื่อมประโยคเพื่อบอกเหตุผล จึงเป็นคำสันธาน" },
            { q: "ข้อใดเป็นคำสรรพนามทั้งหมด", choices: ["ฉัน เขา เธอ", "ครู แมว บ้าน", "เดิน กิน นอน", "ใน บน ของ"], answer: 0, explain: "ฉัน เขา เธอ ใช้แทนคำนาม จึงเป็นคำสรรพนาม" }
          ]
        }
      ]
    },

    {
      id: "religion",
      title: "ศาสนาศีลธรรม",
      color: "#f2a20c",
      icon: "lotus",
      summaries: [
        {
          title: "พระรัตนตรัย",
          text: `
**พระรัตนตรัย** แปลว่า แก้วอันประเสริฐ ๓ ประการ เป็นหลักสำคัญของพระพุทธศาสนา

- **พระพุทธ** ผู้ตรัสรู้ชอบได้โดยพระองค์เอง
- **พระธรรม** คำสั่งสอนของพระพุทธเจ้า
- **พระสงฆ์** ผู้ปฏิบัติตามคำสั่งสอนและเผยแผ่พระธรรม
`
        },
        {
          title: "ศีล ๕",
          text: `
ศีล ๕ เป็นข้อปฏิบัติพื้นฐานสำหรับคฤหัสถ์ (ผู้ครองเรือน)

- ข้อ ๑ เว้นจากการฆ่าสัตว์
- ข้อ ๒ เว้นจากการลักทรัพย์
- ข้อ ๓ เว้นจากการประพฤติผิดในกาม
- ข้อ ๔ เว้นจากการพูดเท็จ
- ข้อ ๕ เว้นจากการดื่มสุราและของมึนเมา

> ศีลช่วยควบคุมกายและวาจาให้เรียบร้อย
`
        }
      ],
      quizzes: [
        {
          id: "religion-1",
          title: "ข้อสอบชุดที่ ๑",
          shuffle: true,
          questions: [
            { q: "พระรัตนตรัยประกอบด้วยอะไรบ้าง", choices: ["พระพุทธ พระธรรม พระสงฆ์", "ศีล สมาธิ ปัญญา", "ทาน ศีล ภาวนา", "พุทธ ธรรม ศีล"], answer: 0, explain: "พระรัตนตรัย คือ พระพุทธ พระธรรม และพระสงฆ์" },
            { q: "ศีลข้อที่ ๔ คือข้อใด", choices: ["เว้นจากการลักทรัพย์", "เว้นจากการพูดเท็จ", "เว้นจากการฆ่าสัตว์", "เว้นจากการดื่มสุรา"], answer: 1, explain: "ศีลข้อที่ ๔ คือ เว้นจากการพูดเท็จ" },
            { q: "\"พระธรรม\" หมายถึงอะไร", choices: ["ผู้ตรัสรู้", "คำสั่งสอนของพระพุทธเจ้า", "ผู้ปฏิบัติตามคำสอน", "สถานที่ปฏิบัติธรรม"], answer: 1, explain: "พระธรรม คือ คำสั่งสอนของพระพุทธเจ้า" }
          ]
        }
      ]
    }
  ]
};
