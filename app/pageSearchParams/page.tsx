'use client'

import { useSearchParams } from "next/navigation";


export default function Page() {
    const searchParams = useSearchParams(); // สร้าง object searchParams เพื่อใช้งาน function
    const name = searchParams.get("name"); // ดึงค่า name จาก searchParams

    return <div>Name = {name}</div>

}


