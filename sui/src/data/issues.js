import {ChartColors, howLongInThePastMonths} from './globalDefinitions.js'

const issuesCreated = [
  // https://github.com/SUI-Components/sui-components/issues?q=is%3Aissue+created%3A2022-11-01..2022-11-30+
  null /* April 2019 */,
  null /* May 2019 */,
  null /* June 2019 */,
  null /* July 2019 */,
  null /* August 2019 */,
  null /* September 2019 */,
  null /* October 2019 */,
  null /* November 2019 */,
  null /* December 2019 */,
  2 /* January 2020 */,
  1 /* February 2020 */,
  0 /* March 2020 */,
  2 /* April 2020 */,
  1 /* May 2020 */,
  0 /* June 2020 */,
  2 /* July 2020 */,
  3 /* August 2020 */,
  2 /* September 2020 */,
  22 /* October 2020 */,
  4 /* November 2020 */,
  7 /* December 2020 */,
  1 /* January 2020 */,
  2 /* February 2021 */,
  9 /* March 2021 */,
  4 /* April 2021 */,
  1 /* May 2021 */,
  3 /* June 2021 */,
  5 /* July 2021 */,
  0 /* August 2021 */,
  62 /* September 2021 */,
  23 /* October 2021 */,
  0 /* November 2021 */,
  0 /* December 2021 */,
  5 /* January 2022 */,
  4 /* February 2022 */,
  13 /* March 2022 */,
  4 /* April 2022 */,
  24 /* May 2022 */,
  8 /* June 2022 */,
  10 /* July 2022 */,
  4 /* August 2022 */,
  23 /* September 2022 */,
  34 /* October 2022 */,
  4 /* November 2022 */,
  0 /* December 2022 */,
  5 /* Jan 2025 */
].slice(howLongInThePastMonths)

//
const issuesResolved = [
  // https://github.com/SUI-Components/sui-components/issues?q=is%3Aissue+closed%3A2022-11-01..2022-11-30+
  null /* April 2019 */,
  null /* May 2019 */,
  null /* June 2019 */,
  null /* July 2019 */,
  null /* August 2019 */,
  null /* September 2019 */,
  null /* October 2019 */,
  null /* November 2019 */,
  null /* December 2019 */,
  1 /* January 2020 */,
  1 /* February 2020 */,
  10 /* March 2020 */,
  2 /* April 2020 */,
  1 /* May 2020 */,
  0 /* June 2020 */,
  1 /* July 2020 */,
  1 /* August 2020 */,
  0 /* September 2020 */,
  14 /* October 2020 */,
  1 /* November 2020 */,
  7 /* December 2020 */,
  5 /* January 2021 */,
  1 /* February 2021 */,
  1 /* March 2021 */,
  2 /* April 2021 */,
  6 /* May 2021 */,
  5 /* June 2021 */,
  3 /* July 2021 */,
  2 /* August 2021 */,
  2 /* September 2021 */,
  48 /* October 2021 */,
  4 /* November 2021 */,
  2 /* December 2021 */,
  3 /* January 2022 */,
  11 /* February 2022 */,
  9 /* March 2022 */,
  2 /* April 2022 */,
  24 /* May 2022 */,
  5 /* June 2022 */,
  15 /* July 2022 */,
  0 /* August 2022 */,
  2 /* September 2022 */,
  54 /* October 2022 */,
  0 /* November 2022 */,
  1 /* December 2022 */,
  3 /* Jan 2025 */
].slice(howLongInThePastMonths)

export const issues = [
  {
    label: 'Issues Created',
    data: issuesCreated,
    backgroundColor: ChartColors.red,
    borderColor: ChartColors.red,
    fill: false,
    lineTension: 0
  },
  {
    label: 'Issues Resolved',
    data: issuesResolved,
    backgroundColor: ChartColors.green,
    borderColor: ChartColors.green,
    fill: false,
    lineTension: 0
  }
]
