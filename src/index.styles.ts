import styled from 'styled-components';
import { Theme } from './index.types';

export const StyledFooter = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 45px;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  border-top: 1px solid #e0e0e0;
  background-color: inherit;
`;
StyledFooter.displayName = 'PersianTools(Picker)(Footer)';

const StyledButton = styled.button`
  height: 45px;
  color: #c5dcfa;
  background: #1672ec;
  border-radius: 8px;
  border: none;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  -webkit-appearance: button;
  margin-right: 15px;
  margin-left: 15px;
`;
export const StyledSubmitButton = styled(StyledButton)<{ fullWidth: boolean }>`
  width: ${(props) => (props.fullWidth ? '100%' : '140px')};
  display: ${(props) => (props.fullWidth ? 'block' : 'inline-block')};
`;
StyledSubmitButton.displayName = 'PersianTools(Picker)(SubmitButton)';

export const StyledCancelButton = styled(StyledButton)`
  width: 140px;
  display: inline-block;
  color: #616161;
  background-color: transparent;
  border: 1px solid #c0c0c0;
  margin-left: 15px;
`;
StyledCancelButton.displayName = 'PersianTools(Picker)(CancelButton)';

export const StyledDrawerOverlay = styled.div<{ theme: Theme }>`
  background-color: ${(props) =>
    props.theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(0, 0, 0, 0.5)'};
  position: fixed;
  inset: 0;
  z-index: 50;
`;
StyledDrawerOverlay.displayName = 'PersianTools(Picker)(DrawerOverlay)';

export const StyledDrawerContent = styled.div<{ theme: Theme }>`
  background-color: ${(props) => (props.theme === 'dark' ? '#222' : '#fff')};
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding: 0;
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 50;
  outline: none;

  .drawer-body {
    flex: 1;
    overflow-y: auto;
    position: relative;
    padding-bottom: 60px;
  }

  ${(props) => {
    if (props.theme === 'dark') {
      return `
        .rmc-picker-mask {
          background-image: linear-gradient(
              to bottom,
              rgba(34, 34, 34, 0.95),
              rgba(34, 34, 34, 0.6)
            ),
            linear-gradient(to top, rgba(34, 34, 34, 0.95), rgba(34, 34, 34, 0.6));
        }
        .rmc-column-item-content {
          background: #313133;
          height: 30px;
          font-size: 15px;
          line-height: 30px;
          border-radius: 5px;
          color: #fff;
        }
        .rmc-picker-item-selected .rmc-column-item-content {
          background: #7048ec;
        }
        .drawer-footer {
          border-top: none;
          
          &__cancel {
            background: #313133;
            color: #fff;
            border: none;
          }
        }
      `;
    }

    return ``;
  }}
`;
StyledDrawerContent.displayName = 'PersianTools(Picker)(DrawerContent)';

export const StyledDrawerHandle = styled.div<{ theme: Theme }>`
  width: 40px;
  height: 4px;
  background-color: ${(props) => (props.theme === 'dark' ? '#666' : '#d1d5db')};
  border-radius: 2px;
  margin: 12px auto;
  cursor: grab;
  
  &:active {
    cursor: grabbing;
  }
`;
StyledDrawerHandle.displayName = 'PersianTools(Picker)(DrawerHandle)';
