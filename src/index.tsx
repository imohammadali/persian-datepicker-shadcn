import React from 'react';
// Global Components
import { Drawer } from 'vaul';
// Local Components
import { WheelPicker } from './components/WheelPicker';
// Styled Components
import {
  StyledFooter,
  StyledSubmitButton,
  StyledCancelButton,
  StyledDrawerContent,
  StyledDrawerOverlay,
  StyledDrawerHandle,
} from './index.styles';
// Helpers
import { prefixClassName } from './helpers';
// Types
import type { PickerProps, Theme } from './index.types';
import type { WheelPickerSelectEvent } from './components/WheelPicker/index.types';

const Picker: React.FC<PickerProps> = (props) => {
  // Local Variables
  const classNamePrefix = prefixClassName(props.classNamePrefix!);
  // Local States
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const [selectedDate, setSelectedDate] =
    React.useState<WheelPickerSelectEvent>();
  const [theme, setTheme] = React.useState<Omit<Theme, 'auto'>>('light');

  React.useEffect(() => {
    if (props.theme === 'auto') {
      // Check for the first initialization
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        setTheme('dark');
      } else {
        setTheme('light');
      }

      // Watch native system theme changes
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', (e) => {
          const newColorScheme = e.matches ? 'dark' : 'light';
          setTheme(newColorScheme);
        });
    } else {
      setTheme(props.theme!);
    }

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', (e) => {
          const newColorScheme = e.matches ? 'dark' : 'light';
          setTheme(newColorScheme);
        });
    };
  }, [props.theme]);

  React.useEffect(() => {
    setIsOpen(props.isOpen);
  }, [props.isOpen]);

  function handleCancel() {
    props.onCancel?.();
    handleClose();
  }

  function handleClose() {
    setIsOpen(false);
    props.onClose?.();
  }

  function handleOnChange(selected: WheelPickerSelectEvent) {
    setSelectedDate(selected);
    props.onChange?.(selected);
  }

  function handleSubmit() {
    props.onSubmit(selectedDate!);
    handleClose();
  }

  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          handleCancel();
        }
      }}
      dismissible={!props.disableSheetDrag}
      modal={true}
    >
      <Drawer.Overlay asChild>
        <StyledDrawerOverlay theme={theme} className={classNamePrefix('drawer-overlay')} />
      </Drawer.Overlay>
      <Drawer.Content
        asChild
        style={{
          height: `${props.height! + (props.title ? 55 : 0)}px`,
          maxHeight: '90vh',
        }}
      >
        <StyledDrawerContent
          theme={theme}
          className={classNamePrefix('drawer-content')}
        >
          {!props.disableSheetHeaderDrag && (
            <Drawer.Handle>
              <StyledDrawerHandle theme={theme} className={classNamePrefix('drawer-handle')} />
            </Drawer.Handle>
          )}
          <div className={classNamePrefix('drawer-body')}>
            <WheelPicker
              title={props.title}
              value={props.value}
              config={props.config}
              minDate={props.minDate}
              maxDate={props.maxDate}
              endYear={props.endYear}
              onChange={handleOnChange}
              startYear={props.startYear}
              addDayName={props.addDayName}
              initialValue={props.initialValue}
              classNamePrefix={props.classNamePrefix}
              highlightWeekends={props.highlightWeekends}
              highlightHolidays={props.highlightHolidays}
            />

            <StyledFooter className={classNamePrefix('drawer-footer')}>
              {props.showCancelButton && (
                <StyledCancelButton
                  className={classNamePrefix('drawer-footer__cancel')}
                  onClick={handleCancel}
                >
                  {props.cancelText}
                </StyledCancelButton>
              )}
              <StyledSubmitButton
                fullWidth={!props.showCancelButton}
                className={classNamePrefix('drawer-footer__submit')}
                onClick={handleSubmit}
              >
                {props.submitText}
              </StyledSubmitButton>
            </StyledFooter>
          </div>
        </StyledDrawerContent>
      </Drawer.Content>
    </Drawer.Root>
  );
};

Picker.displayName = 'PersianTools(Picker)';
Picker.defaultProps = {
  isOpen: false,
  theme: 'light',
  classNamePrefix: 'persian-datepicker',
  submitText: 'تایید',
  cancelText: 'انصراف',
  showCancelButton: true,
  disableSheetDrag: true,
  disableSheetHeaderDrag: false,
  addDayName: false,
  height: 385,
};

export { Picker, WheelPicker };
export * from './helpers/date';
export type {
  DatePickerConfig,
  WheelPickerSelectEvent,
  WheelPickerProps,
  PickerColumnCaption,
  RequiredPickerExtraDateInfo,
  DateConfigTypes,
  PickerDateModel,
  DateConfigFormats,
  PickerColumns,
  PickerSelectedDateValue,
  PickerItemModel,
  RequiredPickerDateModel,
  PickerExtraDateInfo,
  DateConfigValuesModel,
} from './components/WheelPicker/index.types';
