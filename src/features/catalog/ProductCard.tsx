import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  CardHeader
} from "@mui/material";
import { Product } from "../../models/product";
import { Link } from "react-router-dom";
import { useState } from "react";
import agent from "../../app/api/agent";
import { LoadingButton } from "@mui/lab";
import { useStoreContext } from "../../app/context/StoreContext";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const [loading, setLoading] = useState(false);
  const { setBasket } = useStoreContext();

  function handleAddItem(productId: number) {
    setLoading(true);
    agent.Basket.addItem(productId)
      .then((basket) => setBasket(basket))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.2s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
          boxShadow: "0px 6px 24px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#167d7f", color: "white" }}>
            {product.name.charAt(0).toUpperCase()}
          </Avatar>
        }
        title={product.name}
        titleTypographyProps={{
          sx: { fontWeight: "bold", color: "text.primary", fontSize: "1.1rem" },
        }}
      />
      <CardMedia
        sx={{
          height: 180,
          backgroundSize: "cover",
          bgcolor: "grey.200",
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}
        image={product.pictureUrl}
        title={product.name}
      />
      <CardContent sx={{ px: 2 }}>
        <Typography gutterBottom color="#167d7f" variant="h6">
          ${(product.price / 100).toFixed(2)}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 2 }}>
          {product.brand} / {product.type}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 2,
          pb: 2,
          pt: 0,
        }}
      >
        <LoadingButton
          loading={loading}
          onClick={() => handleAddItem(product.id)}
          size="small"
          variant="contained"
          sx={{
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            bgcolor: "#167d7f",
            "&:hover": {
              bgcolor: "#14696a",
            },
          }}
        >
          Add to Cart
        </LoadingButton>
        <Button
          component={Link}
          to={`/catalog/${product.id}`}
          size="small"
          variant="outlined"
          sx={{
            borderRadius: 2,
            fontWeight: "bold",
            textTransform: "none",
            color: "#167d7f",
            borderColor: "#167d7f",
            "&:hover": {
              borderColor: "#14696a",
              color: "#14696a",
            },
          }}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
}
