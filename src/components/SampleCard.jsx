import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router";
   
  export function SampleCard({label,image,detail}) {
    const nav = useNavigate();
    return (
      <Card className="mt-6 w-96">
        <CardHeader color="blue-gray" className="relative h-56">
          <img
            src={image}
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {label}
          </Typography>
          <Typography>
            <p className="line-clamp-3">
           {detail}
           </p>
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={() => nav(`/category-items/${label}`)}>Order Food</Button>
        </CardFooter>
      </Card>
    );
  }