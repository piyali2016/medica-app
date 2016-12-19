// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { FooterComponent } from './footer.component';

describe('footer Component', () => {
  const html = '<my-footer></my-footer>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [FooterComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('footer Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
