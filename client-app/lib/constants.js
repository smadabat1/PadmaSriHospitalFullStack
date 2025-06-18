export const NAV_THEME = {
    light: {
      background: 'hsl(260 82% 98%)', // background
      border: 'hsl(220 13% 91%)', // border
      card: 'hsl(0 0% 100%)', // card
      notification: 'hsl(0 84.2% 60.2%)', // destructive
      primary: 'hsl(262.1 83.3% 57.8%)', // primary
      text: 'hsl(224 71.4% 4.1%)', // foreground
    },
    dark: {
      background: 'hsl(224 71.4% 4.1%)', // background
      border: 'hsl(215 27.9% 16.9%)', // border
      card: 'hsl(224 71.4% 4.1%)', // card
      notification: 'hsl(0 62.8% 30.6%)', // destructive
      primary: 'hsl(262.1 83.3% 57.8%)', // primary
      text: 'hsl(210 20% 98%)', // foreground
    },
  };

export const calculatedDataKeys = {
  "prevPeriodStartingDate": "prevPeriodStartingDate",
  "ovulationDate": "ovulationDate",
  "nextPeriod":"nextPeriod",
  "fertileWindowStart":"fertileWindowStart",
  "earliestPossibleTest": "earliestPossibleTest"
}

export const VCAppState = {
  "Idle": "Idle",
  "Creating": "Creating",
  "Joining": "Joining",
  "Joined": "Joined",
  "Leaving": "Leaving",
  "Error": "Error"
}

export const MeetingStates = {
  'joined-meeting': 'joined-meeting',
  'left-meeting': 'left-meeting',
  'error': 'error'
}