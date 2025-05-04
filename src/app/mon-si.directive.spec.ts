import { TemplateRef, ViewContainerRef } from '@angular/core';
import { MonSiDirective } from './mon-si.directive';

describe('MonSiDirective', () => {
  it('should create an instance', () => {
    const mockTemplateRef = {} as TemplateRef<any>;
    const mockViewContainerRef = {} as ViewContainerRef;
    const directive = new MonSiDirective(mockTemplateRef, mockViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
