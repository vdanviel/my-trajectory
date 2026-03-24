export default function HistoryLine({ text } : {text: string | undefined}) {
  return (
    <div className="flex items-center gap-4">
      
      {/* Linha vertical */}
      <div className="flex flex-col items-center">
        <div className="size-3 rounded-full bg-gray-300"></div>
        <div className="w-px h-20 bg-gray-300"></div>
        <div className="size-3 rounded-full bg-gray-300"></div>
      </div>

      {/* Texto */}
      <p className="text-sm text-gray-400 max-w-md italic">
        {text}
      </p>

    </div>
  );
}