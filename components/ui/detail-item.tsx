export const DetailItem = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center pl-2 pr-2 pt-5 pb-5 border-b border-gray-200 gap-3">
    <div className="p-2 bg-gray-100 rounded-full">{icon}</div>
    <div>
      <p className="text-gray-500 text-sm">{label}</p>
      <p className="font-medium">{value}</p>
    </div>
  </div>
);
