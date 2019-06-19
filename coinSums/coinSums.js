/*

In England the currency is made up of pound, £, and pence, p, and there are eight coins in general circulation:

1p piece
2p piece
5p piece
10p piece
20p piece
50p piece
£1 (100p)
£2 (200p)

It is possible to make £2 in the following way:

1 * £1 + 1 * 50p + 2 * 20p + 1 * 5p + 1 * 2p + 3 * 1p
How many different ways can £2 be made using any number of coins?

example usage of `makeChange`:

// aka, there's only one way to make 1p. that's with a single 1p piece
makeChange(1) === 1
// aka, there's only two ways to make 2p. that's with two, 1p pieces or with a single 2p piece
makeChange(2) === 2
*/

var makeChange = function(total) {

    // build an array to hold coin values
    let coins = [ 1, 2, 5, 10, 20, 50, 100, 200 ];

    // build a result count to be returned
    let result = 0;

    // build a current sum holder
    let currSum;

    // handle total of 1 or 2
    if (total === 1) {
        return 1;
    } else if (total === 2) {
        return 2;
    } else {

        // for each coin, while the current sum hasn't reached the total:
        for ( let coin of coins ) {
            if (currSum === total) {
                result++;
                currSum = 0;
            }
            while ( currSum !== total ) {
                // if coin equals our total, inc results and current sum and break out of while loop
                if ( coin === total ) {
                    currSum += coin;
                // if coin doesn't equal total, inc current sum by coin
                } else if ( coin !== total ) {
                    currSum += coin;       
                }
            }
        }
    }
    return result;
}



