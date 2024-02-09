import { styled } from '@mui/material/styles';
export var CompanionWindowSection = styled('div', {
  name: 'CompanionWindowSection',
  slot: 'root'
})(function (_ref) {
  var theme = _ref.theme;
  return {
    paddingBlockEnd: theme.spacing(1),
    paddingBlockStart: theme.spacing(2),
    paddingInlineEnd: theme.spacing(1),
    paddingInlineStart: theme.spacing(2)
  };
});