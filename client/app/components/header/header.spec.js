/**
 * Created by orlandoadeyemi on 22/03/2017.
 */
import headerModule from './header';
import headerComponent from './header.component';
import headerTemplate from './header.html';

describe('header', () => {

  describe('Module', () => {
    it('is named correctly', () => {
      expect(headerModule.name).toEqual('header');
    });
  });

  describe('Template', () => {
    it('includes the `image` logo', () => {
      expect(headerTemplate).toContain('img');
    });
  });

  describe('Component', () => {
    const component = headerComponent;

    it('includes the intended template',() => {
      expect(component.template).toEqual(headerTemplate);
    });

    it('uses the correct `controllerAs` label', () => {
      expect(component.controllerAs).toBe('headerCtrl');
    });

  });
});
