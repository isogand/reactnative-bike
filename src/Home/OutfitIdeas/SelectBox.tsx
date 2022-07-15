import RNMultiSelect, {IMultiSelectDataTypes} from "@freakycoder/react-native-multiple-select";

const staticData: Array<IMultiSelectDataTypes> = [
    {
        id: 0,
        value: "Euismod Justo",
        isChecked: false,
    },
    {
        id: 1,
        value: "Risus Venenatis",
        isChecked: false,
    },
    {
        id: 2,
        value: "Vestibulum Ullamcorper",
        isChecked: false,
    },
    {
        id: 3,
        value: "Lorem Nibh",
        isChecked: false,
    },
    {
        id: 4,
        value: "Ligula Amet",
        isChecked: false,
    },
];

function App() {
   return (
       <RNMultiSelect
           disableAbsolute
           data={staticData}
           onSelect={(selectedItems) => console.log("SelectedItems: ", selectedItems)}
       />
   )
}

export default App
