"use client";
import { Navbar } from "@/app/(main)/_components/navbar";
import { useParams } from "next/navigation";

export default function DusunDetail() {
  const params = useParams();
  const text = params.dusunId;

  return (
    <div>
      <Navbar staticBar={true} />
      <p>{text}</p>
    </div>
  );
}
