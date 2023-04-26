

function findMatching(drivers, element) {
return drivers.filter(function (driver)
 { return driver.toLowerCase() === element.toLowerCase() })
};

function fuzzyMatch(drivers, element) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase().substring(0, element.length)
    === element.toLowerCase() })

}


function matchName(drivers, element) {
    return drivers.filter((driver) => {
        return driver.name === element
    })
}