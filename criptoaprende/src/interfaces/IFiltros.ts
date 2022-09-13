export default interface ITutorial {
  selectedPlataforma: string;
  setSelectedPlataforma: React.Dispatch<React.SetStateAction<string>>;
  selectedTiempo: string;
  setSelectedTiempo: React.Dispatch<React.SetStateAction<string>>;
  getDropdownOptions: (tipo: string) => string[];
}
