# P3 - Data model | Online Store Database

That database model simulates a DB from an online store, containing 4 entities: **Seller**, **Client**, **Product** & **Order**.

## Step to initialize

- Clone the repo
- Install all the dependencies: <code>bun install</code>
- Start the sqlite container: <code>docker-compose -f docker/docker-compose up -d</code>
- Create the DB: <code>bun prisma db push</code>
- Fill the DB with seed data: <code>bun prisma db seed</code>
- Access Prisma Studio: <code>bun prisma studio</code>
- Execute the scripts, example: <code>bun run scripts/sellers/get-sellers.ts</code> or <code>bun run scripts/products/get-product-by-id.ts 5</code>


After the seeding is done, the DB is filled with:
- 5 sellers
- 10 clients
- 10 products
- 15 orders


## Description of the scripts

The scripts are separated by entities, here's a brief explanation of what each script should return when executed:

### Sellers

<code>get-sellers.ts</code>: Returns a list containing all 5 sellers.

<code>get-seller-by-id.ts</code>: Returns the seller corresponding to the entered ID. 

<code>get-seller-by-email.ts</code>: Returns the seller corresponding to the entered email.

### Clients

<code>get-clients.ts</code>: Returns a list containing all 10 clients.

<code>get-client-by-id.ts</code>: Returns the client corresponding to the entered ID. 

<code>get-client-by-email.ts</code>: Returns the client corresponding to the entered email.

### Products

<code>get-products.ts</code>: Returns a list containing all 10 products.

<code>get-product-by-id.ts</code>: Returns the product corresponding to the entered ID. 

### Orders

<code>get-orders.ts</code>: Returns a list containing all 15 orders.

<code>get-order-by-id.ts</code>: Returns the order corresponding to the entered ID. 
