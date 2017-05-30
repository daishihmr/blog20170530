phina.define("Extensions", {
  _static: {
    setup: function() {
      this._phina();
      this._three();
    },

    _phina: function() {
      // Element
      let _addChild = Element.prototype.addChild;
      Element.prototype.addChild = function(child) {
        _addChild.call(this, child);
        if (this.$t && child.$t) {
          this.$t.add(child.$t);
        }
        this.flare("addedchild", {
          child: child,
        });
      };

      let _removeChild = Element.prototype.removeChild;
      Element.prototype.removeChild = function(child) {
        _removeChild.call(this, child);
        if (this.$t && child.$t) {
          this.$t.remove(child.$t);
        }
      }

      // Label
      Label.defaults.fill = "white";
    },

    _three: function() {
      // Euler
      THREE.Euler.random = function() {
        return new THREE.Euler(0, Random.randfloat(0, Math.PI * 2), Random.randfloat(0, Math.PI * 2));
      };
    }
  },
});
