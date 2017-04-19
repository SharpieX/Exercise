/**
 * Created by sharpie on 20/04/17.
 */

function markoPolo() {
  var output = "";
  for (var i = 1; i <= 100; i++) {
    output = output + ", " + speakNumber(i);
  }
  console.log(output);
}

function speakNumber(number) {
  if (number % 4 == 0 && number % 7 == 0) {
    return "marcoplo";
  } else if (number % 4 == 0) {
    return "marco"
  } else if (number % 7 == 0) {
    return "polo"
  }
  return number;
}
