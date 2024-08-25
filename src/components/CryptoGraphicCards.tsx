import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { formatToCurrency } from "../helpers/formatToCurrency";
import { GetCryptoIcon } from "./GetCryptoIcon";
import { useCrypto } from "../hooks/useCrypto";

const CryptoGraphicCards = ({
  name,
  price,
  id,
}: {
  name: string;
  price: number;
  id: string;
}) => {
  const { getById } = useCrypto();
  const crypto = getById(id);

  // Prepara los datos para la gráfica
  const data = crypto.history.map((value, index) => ({
    name: `T${index + 1}`,
    value,
  }));

  return (
    <section className="w-full flex flex-row justify-start gap-2 rounded-lg p-4">
      <div className="w-4/6 flex flex-col justify-start gap-2">
        <div className="flex flex-row justify-start gap-2">
          {GetCryptoIcon({ name })}
        </div>
        <h5 className="text-xl font-bold text-white">{name}</h5>
        <div className="flex flex-row justify-between gap-2">
          <p className="text-sm text-slate-400">
            {formatToCurrency(price)} USD
          </p>
        </div>
      </div>
      <div className="w-2/6 flex flex-col items-start justify-start gap-2">
        <ResponsiveContainer width="100%" height={80}>
          <LineChart
            data={data}
            margin={{ top: 5, right: 5, bottom: 5, left: 0 }}
          >
            <XAxis dataKey="name" hide />
            <YAxis domain={["dataMin", "dataMax"]} hide />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4caf50"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
};

export default CryptoGraphicCards;
