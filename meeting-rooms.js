/*
  Given an array of meeting time intervals consisting of start and end times 
  [[s1,e1], [s2,e2]...] deterime if a person could attend all meetings.
*/

// Find all the start times and then sort them
// do the same for all end times
// Then compare if the start time of the 2nd meeting (that is sorted) is less than end time of the first meeting
  // return false
const available = (intervals) => {
  let start = [];
  let end = [];
  for (let i = 0; i < intervals.length; i++) {
    start.push(intervals[i][0]);
    end.push(intervals[i][1]);
  }
  
  start.sort((a,b) => a - b);
  end.sort((a,b) => a - b);

  for (let j = 0; j < start.length; j++) {
    if (start[j + 1] < end[j]) {
      return false;
    }
  }
  return true;
}