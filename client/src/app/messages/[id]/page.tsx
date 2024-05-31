"use client";

import { useParams } from "next/navigation";

function ConversationPage() {
  const params = useParams();
  return <h2>{params.id}</h2>;
}

export default ConversationPage;
