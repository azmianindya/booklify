import { SearchField, Label, ListBox, Select } from "@heroui/react"

const Searchbar = () => {
  return (
    <div className="flex flex-row bg-transparent justify-between items-center gap-4 mb-6">
      {/* search */}  
      <div className="bg-white w-[320px] h-11 rounded-xl border border-[#D1D5DB] px-4 flex items-center">
        <SearchField name="search" className="w-full" aria-label="Search books">
          <SearchField.Group className="w-full flex items-center border-none shadow-none bg-transparent p-0 gap-2">
            <SearchField.SearchIcon className="text-gray-400 shrink-0" />
            <SearchField.Input className="flex-1 bg-transparent outline-none text-sm" placeholder="Search books..."/>
          </SearchField.Group>
        </SearchField>
      </div>

      {/* category */}
      <div className="bg-white w-40 h-11 rounded-xl border border-[#D1D5DB] px-4 flex items-center">
        <Select className="w-full" placeholder="All Categories" aria-label="Category">
          <Label className="hidden">Category</Label>
          <Select.Trigger className="w-full h-full border-none shadow-none bg-transparent p-0 flex items-center justify-between gap-3">
            <Select.Value className="text-sm text-gray-700" />
            <Select.Indicator className="text-gray-500" />
          </Select.Trigger>

          <Select.Popover className="bg-white w-40 rounded-xl border border-[#D1D5DB] shadow-md p-1">
            <ListBox className="bg-white">
              {[
                { id: "all", label: "All" },
                { id: "available", label: "Available" },
                { id: "borrowed", label: "Borrowed" },
              ].map((cat) => (
                <ListBox.Item key={cat.id} id={cat.id} textValue={cat.label} className="rounded-lg px-3 py-1 text-sm hover:bg-gray-100 cursor-pointer border-none outline-none shadow-none">
                  {cat.label}
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  )
}

export default Searchbar