class Driver {
  constructor(name, joindate) {
    this.name = name
    this.startDate = new Date(joindate)
  }

  yearsExperienceFromBeginningOf(currentyear) {
    return currentyear - this.startDate.getFullYear()
  }
}

class Route {
  constructor(start,end){
    this.beginningLocation = start
    this.endingLocation = end
  }

  blocksTravelled() {
    let northSouth = 0;
    let startingStreet = Number.parseInt(this.beginningLocation.vertical);
    let endingStreet = Number.parseInt(this.endingLocation.vertical);

    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue'];
    let endingAve = eastWest.indexOf(this.endingLocation.horizontal)
    let startingAve = eastWest.indexOf(this.beginningLocation.horizontal)
    let eastWestCount = 0;

    if (endingStreet >= startingStreet) {
      northSouth = endingStreet - startingStreet
    } else {
      northSouth = startingStreet - endingStreet
    }

    if (endingAve >= startingAve) {
      eastWestCount = endingAve - startingAve
    } else {
      eastWestCount = startingAve - endingAve
    }

    return eastWestCount + northSouth;
  }

  estimatedTime(peakTime) {
    if (peakTime === true) {
      return this.blocksTravelled() * 0.5
    } else {
      return this.blocksTravelled() * (1/3)
    }
  }
}
