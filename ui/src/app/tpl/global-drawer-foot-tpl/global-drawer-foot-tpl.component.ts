import { ChangeDetectionStrategy, Component, EventEmitter, Output, TemplateRef, ViewChild } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

export abstract class GlobalDrawerFootTplComponentToken {
  componentTpl!: TemplateRef<NzSafeAny>;
  readonly sureEmitter = new EventEmitter<void>();
  readonly cancelEmitter = new EventEmitter<void>();
  abstract sure(): void;
  abstract cancel(): void;
}

@Component({
  selector: 'app-global-drawer-foot-tpl',
  imports: [NzButtonModule],
  templateUrl: './global-drawer-foot-tpl.component.html',
  providers: [{ provide: GlobalDrawerFootTplComponentToken, useExisting: GlobalDrawerFootTplComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GlobalDrawerFootTplComponent implements GlobalDrawerFootTplComponentToken {
  @ViewChild('componentTpl', { static: true }) componentTpl!: TemplateRef<NzSafeAny>;
  @Output() readonly sureEmitter = new EventEmitter<void>();
  @Output() readonly cancelEmitter = new EventEmitter<void>();
  sure(): void {
    this.sureEmitter.emit();
  }

  cancel(): void {
    this.cancelEmitter.emit();
  }
}
