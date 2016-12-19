// This shows a different way of testing a component, check about for a simpler one
import { Component } from '@angular/core';

import { TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('navbar Component', () => {
  const html = '<my-navbar></my-navbar>';

  beforeEach(() => {
    TestBed.configureTestingModule({declarations: [NavbarComponent, TestComponent]});
    TestBed.overrideComponent(TestComponent, { set: { template: html }});
  });

  it('should ...', () => {
    const fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.children[0].textContent).toContain('navbar Works!');
  });

});

@Component({selector: 'my-test', template: ''})
class TestComponent { }
