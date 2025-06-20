import Text from "./components/text";

export default function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-2">
        <Text variant="body-sm-bold" className="text-pink-base">
          Olá mundo
        </Text>
        <Text variant="body-md-bold" className="text-green-base">
          Olá mundo
        </Text>
        <Text>Olá mundo</Text>
      </div>
    </div>
  );
}
