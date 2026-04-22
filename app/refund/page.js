export default function Refund() {
  return (
    <div className="max-w-3xl px-6 py-20 mx-auto font-medium text-center text-slate-600">
      <h1 className="mb-8 text-3xl font-black tracking-tighter uppercase text-slate-900">Refund Policy</h1>
      <div className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100">
        <h2 className="mb-4 text-xl font-bold text-slate-900">Cancellation Window</h2>
        <ul className="max-w-md mx-auto space-y-4 text-sm">
          <li className="p-4 bg-white shadow-sm rounded-2xl"><strong>Full Refund:</strong> If cancelled 24 hours before pickup.</li>
          <li className="p-4 bg-white shadow-sm rounded-2xl"><strong>50% Refund:</strong> If cancelled within 12-24 hours.</li>
          <li className="p-4 bg-white shadow-sm rounded-2xl"><strong>No Refund:</strong> If cancelled within 6 hours of scheduled time.</li>
        </ul>
        <p className="mt-8 text-xs italic font-bold uppercase text-slate-400">Refunds take 5-7 business days to process.</p>
      </div>
    </div>
  );
}