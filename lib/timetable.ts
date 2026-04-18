export interface ExamEntry {
    date: string;
    time: string;
    dept: string;
    subject: string;
    title: string;
}

function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = "";
    let inQuotes = false;
    for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === "," && !inQuotes) {
            result.push(current.trim());
            current = "";
        } else {
            current += char;
        }
    }
    result.push(current.trim());
    return result;
}

const CSV_DATA = `Date,Time,Dept.,Subject,Title

08.05.2026,9.00 a.m. - 12.00 p.m.,ALL,CMT 1303,Fundamentals of Mathematics for Technology
28.04.2026,2.00 p.m. - 05.00 p.m.,ALL,CMT 1301,Fundamentals of Physics for Technology
04.05.2026,9.00 a.m. - 12.00 p.m.,ALL,CMT 1302,Fundamentals of Chemistry for Technology
04.05.2026,9.00 a.m. - 11.00 a.m.,ICT,ICT 1305,Program Designing and Programming (Theory)
06.05.2026,9.00 a.m. onwards,ICT,ICT 1305,Program Designing and Programming (Practical)
12.05.2026,9.00 a.m. - 12.00 p.m.,BST,CMT 1306,Fundamentals of Biology for Technology
12.05.2026,9.00 a.m. - 11.00 a.m.,ICT,ICT 1202,Electronic Circuits
13.05.2026,8.00 a.m. onwards,ALL,CML 1202,Presentation Skills - Group Presentations
15.05.2026,9.00 a.m. onwards,ALL,CML 1202,Presentation Skills - Individual Speech (Group 01)
15.05.2026,9.00 a.m. onwards,ICT,ICT 1111,Productivity & Collaborative Tools (Th & Pr)
18.05.2026,9.00 a.m. onwards,ALL,CML 1202,Presentation Skills - Individual Speech (Group 02)
19.05.2026,2.30 p.m. - 4.00 p.m.,ALL,CML 1201,Personality Development
21.05.2026,9.00 a.m. - 12.00 p.m.,ALL,CMT 1205,Communication Skills I - English (Theory)
06.05.2026,9.00 a.m. - 10.00 a.m.,ALL,CML 1202,Presentation Skills (Theory)
25.05.2026,9.00 a.m. onwards,ALL,CMT 1205,Communication Skills I - English (Practical)

Date,Time,Dept.,Subject,Title

27.04.2026,1.00 p.m. - 4.00 p.m.,ALL,CMT 2306,Mathematics For Technology II
29.04.2026,9.00 a.m. - 11.00 a.m.,ALL,ICT 2303,Scientific Computer Applications (Th & Pr)
29.04.2026,9.00 a.m. - 11.00 a.m.,ALL,FDT 2203,Introduction to Food Industry
29.04.2026,9.00 a.m. - 11.00 a.m.,ALL,MTT 2203,Introduction to Ceramic Technology
29.04.2026,9.00 a.m. - 12.00 p.m.,ALL,EET 2301,Digital & Analog Electronics
05.05.2026,1.00 p.m. - 4.00 p.m.,ALL,CMT 2301,Fundamental of Statistics for Technology
07.05.2026,9.00 a.m. - 12.00 p.m.,ALL,CMT 2202,Communication Skills III (English)
11.05.2026,9.00 a.m. - 11.00 a.m.,FDT,FDT 2202,Basic Biochemistry
11.05.2026,9.00 a.m. - 12.00 p.m.,ICT,ICT 2303,Data Structures and Algorithms
11.05.2026,9.00 a.m. onwards,MTT,MTT 2206,Graphical Programming (Practical)
13.05.2026,2.00 p.m. - 4.00 p.m.,ICT,ICT 2207,Software System Design
15.05.2026,2.00 p.m. - 4.00 p.m.,ICT,ICT 2304,Object Oriented Programming
18.05.2026,2.00 p.m. - 4.00 p.m.,ICT,ICT 2202,Operating Systems
25.05.2026,2.00 p.m. - 4.00 p.m.,ALL,CMT 2201,Fundamentals of Solid State Physics
01.06.2026,9.00 a.m. onwards,ICT,ICT 2304,Object Oriented Programming (Practical)
27.05.2026,9.00 a.m. onwards,ALL,CMT 2202,Communication Skills III - English (Practical)

Date,Time,Dept.,Subject,Title

28.04.2026,9.00 a.m. - 11.00 a.m.,ALL,FDT 3203,Food Analysis
28.04.2026,9.00 a.m. - 12.00 p.m.,ALL,EET 3304,Digital Signal Processing
28.04.2026,9.00 a.m. - 12.00 p.m.,ALL,MTT 3308,Polymer Technology I
30.04.2026,2.00 p.m. - 4.00 p.m.,ALL,FDT 3209,Cereals and Pulses Processing Technology
30.04.2026,2.00 p.m. - 4.00 p.m.,ALL,BPT 3304,Molecular Modelling (Theory)
30.04.2026,2.00 p.m. - 4.00 p.m.,ALL,EET 3203,Computer Systems
30.04.2026,2.00 p.m. - 4.00 p.m.,ALL,MTT 3204,Workshop Technology II
30.04.2026,2.00 p.m. - 4.00 p.m.,ALL,ICT 3307,Computational Statistics (Theory)
05.05.2026,9.00 a.m. - 11.00 a.m.,ALL,ICT 3208,Design and Analysis of Algorithm
07.05.2026,2.00 p.m. - 5.00 p.m.,ICT,ICT 3315,Internet of Things
11.05.2026,2.00 p.m. - 4.00 p.m.,ICT,ICT 3218,Basics of Virtual Reality
14.05.2026,9.00 a.m. - 11.00 a.m.,ALL,FDT 3201,Fruits & Vegetables Processing Technology
18.05.2026,9.00 a.m. - 11.00 a.m.,ALL,ICT 3201,Software Project Management
20.05.2026,2.00 p.m. - 4.00 p.m.,ICT,ICT 3217,Advance Computer Networks
26.05.2026,9.00 a.m. onwards,ICT,ICT 3307,Computational Statistics (Practical)

Date,Time,Dept.,Subject,Title

04.05.2026,1.00 p.m. onwards,EET,EET 4301,Electronic Circuit Design and Simulations (Practical)
04.05.2026,2.00 p.m. - 5.00 p.m.,BPT,BPT 4302,Downstream Process Technology
04.05.2026,2.00 p.m. - 5.00 p.m.,MTT,MTT 4305,Polymer Technology II
08.05.2026,2.00 p.m. - 5.00 p.m.,ALL,BPT 4303,Bioremediation and Waste Management
12.05.2026,2.00 p.m. - 4.00 p.m.,ALL,EET 4216,Energy and Environment
16.05.2026,9.00 a.m. - 11.00 a.m.,ALL,CML 4201,Entrepreneurship
19.05.2026,9.00 a.m. - 11.00 a.m.,ALL,EET 4202,Embedded Systems
21.05.2026,2.00 p.m. - 5.00 p.m.,ALL,EET 4304,Power Electronics
23.05.2026,9.00 a.m. - 11.00 a.m.,ALL,CML 4202,Human Resource Management
26.05.2026,9.00 a.m. onwards,EET,EET 4206,Automation Technology II (Practical)
01.06.2026,9.00 a.m. onwards,BPT,BPT 4204,Molecular Virology (Viva)
`;

export const TIMETABLE: Record<number, ExamEntry[]> = (() => {
    const result: Record<number, ExamEntry[]> = { 1: [], 2: [], 3: [], 4: [] };
    const sections = CSV_DATA.split(/Date,Time,Dept\.,Subject,Title/).filter(Boolean);
    sections.forEach((section, index) => {
        const year = index + 1;
        section.trim().split("\n")
            .filter((line) => line.trim() && !line.startsWith(",,"))
            .forEach((line) => {
                const row = parseCSVLine(line);
                if (row[0] && row[0].trim()) {
                    result[year].push({
                        date: row[0].trim(),
                        time: row[1]?.trim() || "",
                        dept: row[2]?.trim() || "",
                        subject: row[3]?.trim() || "",
                        title: row[4]?.trim() || "",
                    });
                }
            });
    });
    return result;
})();

export const CALENDAR_DATA: Record<number, Record<number, Record<string, ExamEntry[]>>> = (() => {
    const data: Record<number, Record<number, Record<string, ExamEntry[]>>> = {};
    for (let year = 1; year <= 4; year++) {
        data[year] = { 4: {}, 5: {} };
        TIMETABLE[year].forEach((exam) => {
            const parts = exam.date.split(".");
            if (parts.length === 3) {
                const month = parseInt(parts[1], 10);
                if (month === 4 || month === 5) {
                    const dateStr = exam.date;
                    if (!data[year][month][dateStr]) data[year][month][dateStr] = [];
                    data[year][month][dateStr].push(exam);
                }
            }
        });
    }
    return data;
})();

export const CALENDAR_DAYS: Record<number, Record<number, { day: number; dateStr: string; exams: ExamEntry[]; isPast: boolean }[]>> = (() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const result: Record<number, Record<number, { day: number; dateStr: string; exams: ExamEntry[]; isPast: boolean }[]>> = {};

    for (let year = 1; year <= 4; year++) {
        result[year] = {};
        for (let monthIndex = 0; monthIndex < 2; monthIndex++) {
            const jsMonth = monthIndex + 3;
            const csvMonth = jsMonth + 1;
            const firstDay = new Date(2026, jsMonth, 1).getDay();
            const daysInMonth = new Date(2026, jsMonth + 1, 0).getDate();
            const days: { day: number; dateStr: string; exams: ExamEntry[]; isPast: boolean }[] = [];

            for (let i = 0; i < firstDay; i++) {
                days.push({ day: 0, dateStr: "", exams: [], isPast: false });
            }

            for (let day = 1; day <= daysInMonth; day++) {
                const dateStr = `${day.toString().padStart(2, "0")}.${csvMonth.toString().padStart(2, "0")}.2026`;
                const exams = CALENDAR_DATA[year][csvMonth]?.[dateStr] || [];
                const examDate = new Date(2026, jsMonth, day);
                days.push({ day, dateStr, exams, isPast: examDate < today });
            }

            result[year][monthIndex] = days;
        }
    }

    return result;
})();
