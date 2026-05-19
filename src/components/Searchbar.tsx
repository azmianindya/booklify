import {SearchField} from "@heroui/react";
import {Label, ListBox, Select} from "@heroui/react";

const Searchbar = () => {
  return (
    <div className="flex flex-row bg-gray-200 justify-between items-center">
    
      {/* search */}  
      <div className="bg-white w-[320px] h-11 rounded-xl border border-[#D1D5DB] px-4 flex items-center">
        <SearchField name="search" className="w-full">
          <SearchField.Group className="w-full border-none shadow-none bg-transparent p-0">
          <SearchField.SearchIcon />

          <SearchField.Input className="w-full bg-transparent outline-none" placeholder="Search books..."/>
          <SearchField.ClearButton />
          </SearchField.Group>
        </SearchField>
      </div>

      <div className="bg-white w-40 h-11 rounded-xl border border-[#D1D5DB] px-4 flex items-center">
        <Select className="w-full" placeholder="All Categories">
          <Label className="hidden">Category</Label>
          <Select.Trigger className="w-full h-full border-none shadow-none bg-transparent p-0 flex items-center justify-between gap-3">
          <Select.Value />
          <Select.Indicator />
          </Select.Trigger>

          <Select.Popover>
          <ListBox>
          <ListBox.Item id="fiction" textValue="Fiction">All
          <ListBox.ItemIndicator />
          </ListBox.Item>

          <ListBox.Item id="history" textValue="History">Available
          <ListBox.ItemIndicator />
          </ListBox.Item>

          <ListBox.Item id="science" textValue="Science">Borrowed
          <ListBox.ItemIndicator />
          </ListBox.Item>
          </ListBox>
          </Select.Popover>
        </Select>

      </div>
        
    </div>
  )
}

export default Searchbar