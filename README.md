# Quidax Books

## Project Tools

This project was bootstrapped with

- React(Typescript]
- Sass (BEM)
- React Helmet Async (SEO)
- Context (State Management)
- React router dom (Route Management)
- Graphql & Apollo Client (Query calls)

## Project Installation

1.  Ensure you have node installed on your system
2.  Clone the repository by running
    ```
    git clone https://github.com/YomiCasual/Quidax-Books.git
    ```
3.  At the root folder run, open the terminal and run:
    ```
    npm install
    ```
4.  Wait for it to install and run:
    ```
    npm run start
    ```
5.  Wait for the app to build and go to localhost:3000 or the port shown from the terminal

6.  To run the test, run:
    ```
     npm run test
    ```

## Assumptions/Features added

1. Added Checkout modal.
2. Wrote Test(Mini)
3. User cannot add more than the available copies.
4. Add different state indicator (Error, Loading, Empty)
5. User can search search by pressing enter on both mobile or desktop key
6. Adding quantity to the cart drawer cart icon.
7. To prevent hitting api during details page, the item is passed to the router state and used in the detail page, however if user access the detail page without clicking, the data is fetched using useLazyQuery

8. I thought of reducing the quantity of item when added to cart, but i reasoned that since the item has not been bought then reducing the quantity doesn't make sense. Rather, the user cannot add more than the copies available in the cart. Only when a user makes a purchase does it count as reducing items left. I confirmed with Jumia as reference before proceeding.

## Requirements Not Covered

All requirements were met according to the documents

## Issues faced

Didn't face any issue. In fact I find it as an opportunity to relearn apollo client and graphql. Especially using useLazyQuery for the detail page. To prevent hitting the api many times

## Constructive FeedBack

To be very candid, the UI design was very awesome and the prototype experience was very seamless. Kudos to UI guy. The way he break down the components and structured the prototype makes it easier for me to have a clear thought pattern and also improve on some of the UIs like the loading state, error state, cart checkout etc. The documentation was also succint about the task and requirements. Kudos

All in all, I believe it is an interesting task and look forward to have a good review about my assessment. Thank you.

## Thank You
