// Purpose: Contains the Product class which is used to represent a product in the database.
namespace API.Entities
{
    public class Product
    {
        //Accessor Datatype Name {get; set;}
        public int Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; } 

        public long Price { get; set; } 

        public string PictureUrl { get; set; }

        public string Type { get; set; }

        public string Brand { get; set; }

        public int QuantityInStock { get; set; }   
    }
}