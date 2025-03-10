import { Card, CardContent, TextField, Button, Stack } from "@mui/material";

const AddDoctor = () => (
  <Card className="p-5 shadow-lg max-w-lg mx-auto">
    <CardContent>
      <h1 className="text-xl font-semibold mb-4">Add New Doctor</h1>
      <Stack className="flex flex-col gap-4">
      <TextField label="Name" variant="outlined" fullWidth/>
      <TextField label="Specialization" variant="outlined" fullWidth/>
      <Button variant="contained" color="primary" fullWidth>Add Doctor</Button>
      </Stack>
    </CardContent>
  </Card>
);

export default AddDoctor;
