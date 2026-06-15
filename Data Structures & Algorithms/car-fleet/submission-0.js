class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        let cars = [];

        for (let i = 0; i < position.length; i++) {

            cars.push([

                position[i],

                (target - position[i]) / speed[i]

            ]);

        }

        // Sort by position descending

        cars.sort((a, b) => b[0] - a[0]);

        let fleets = 0;

        let prevTime = 0;

        for (let i = 0; i < cars.length; i++) {

            let currTime = cars[i][1];

            if (currTime > prevTime) {

                fleets++;

                prevTime = currTime;

            }

        }

        return fleets;
    }
}
