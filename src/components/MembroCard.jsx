function MembroCard({ nome, cargo, foto }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-2xl bg-white p-5 shadow">
      <img className="h-36 w-36 rounded-full border-4 border-jovi object-cover" src={foto} alt={`Foto de ${nome}`} />
      <h3 className="font-serif text-lg">{nome}</h3>
      <p className="text-sm text-gray-600">{cargo}</p>
    </div>
  );
}

export default MembroCard;
