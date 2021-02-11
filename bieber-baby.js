const bieberBaby = [
  'You know you love me, I know you care',
  'Just shout whenever and I will be there',
  'You are my love, you are my heart',
  'And we will never, ever, ever be apart',
  'baby, baby, baby, oh',
  'baby, baby, baby, no',
  'Like baby, baby, baby, oh',
  'Thought youd always be mine, mine',
];

function hasBaby(babyData) {
  return _.some(babyData, function (lyric) { return lyric.includes('baby'); });
}
console.log(hasBaby(bieberBaby)); // prints true
console.log(hasBaby(bieberBaby.slice(0, 4))); // prints false

function numBabies(babyData) {
  return _.filter(babyData, function (lyric) { return lyric.includes('baby'); }).length;
}
console.log(numBabies(bieberBaby)); // prints 3
console.log(numBabies(bieberBaby.slice(4, 6))); // prints 2
