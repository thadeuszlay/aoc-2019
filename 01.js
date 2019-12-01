const input = `148216
142030
129401
74642
108051
54128
145495
67818
120225
67113
107672
101032
147714
55788
87732
73681
114646
76586
116436
139788
125150
136675
90527
74674
105505
146059
52735
101389
108121
62897
132337
51963
129188
122308
84677
66433
118374
66822
94714
101162
54030
136580
55677
114051
133898
95026
112964
68662
85139
53559
84703
92053
132197
60130
63184
86182
113038
52659
140463
123234
97887
70216
131832
108162
116759
111828
132815
113476
127734
134545
99643
141911
74705
65720
95640
51581
66787
147590
72937
148774
119881
139875
131976
68238
100342
134691
112320
86107
100045
120458
54459
52047
108226
102138
141233
54452
67859
105132
81903
104282`;

const getNumberList = input => input.split('\n').map(x => Number(x));
const calculateFuel = x => {
  const f = ((x / 3) | 0) - 2;
  return f < 0 ? 0 : f;
};
const calculateAdditionalFuel = x => {
  const fuel = calculateFuel(x);
  return !fuel ? 0 : fuel + calculateAdditionalFuel(fuel);
}
// part 1
console.log(getNumberList(input).map(calculateFuel).reduce((sum, x) => sum + x, 0));
// part 2
console.log(getNumberList(input).map(calculateAdditionalFuel).reduce((sum, x) => sum + x, 0));
