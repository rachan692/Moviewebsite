import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { useNavigate } from "react-router";
   
  export function EcommerceCard({product}) {
  const nav = useNavigate()
    return (
      <Card className="w-96">
        <CardHeader shadow={false} floated={false} className="h-72">
          <img
            src={product.thumbnail}
            alt="card-image"
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
          <div className="mb-2 flex items-center justify-between">
            <Typography color="blue-gray" className="font-medium">
              {product.title}
            </Typography>
            <Typography color="blue-gray" className="font-medium">
            Rs 1000
            </Typography>
          </div>
         <p className="line-clamp-3">
           {product.description}
          </p>
        </CardBody>
        <CardFooter className="pt-0">
          <Button onClick={()=>nav(`/product-detail/${product.id}`)}
            ripple={false}
            fullWidth={true}
            className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
          >
            Shop Now
          </Button>
        </CardFooter>
      </Card>
    );
  }