import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import Link from "next/link";


export default function Home() {
  return (

    <div className=" bg-white">
      {/* <h1 className="text-lg font-bold">سلام</h1> */}
      <div className="max-w-[1720px] mx-auto px-4 md:px-8 pt-24">

      <div className="rounded-md p-8 md:p-10 shadow-sm  border border-[#e3e3e3]">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <TextField variant="outlined" label="نام" size="small" />
          <FormControl fullWidth size="small" >
            <InputLabel id="demo-simple-select-label">     تاریخ شروع
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"

              label="تاریخ شروع"

            >
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="flex gap-4 justify-end items-center mt-8">
          <Link href={"/crm"}>Crm</Link>
          <Button size="medium" variant="contained">ذخیره</Button>
        </div>
      </div>
      </div>
    </div>
  );
}
