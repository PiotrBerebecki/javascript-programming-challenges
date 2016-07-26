console.clear();

/*
-----------------------------------------
8 kyu
How to freeze an object
(aks Mr. Freeze)
-----------------------------------------

Freeze the MrFreeze object so that it cannot be changed.
*/



// --------------------------------------
var MrFreeze = {};
Object.freeze(MrFreeze);

// Object.seal

// It prevents adding and/or removing properties from the sealed object
// Can throw a TypeError when attempting to modify (most commonly in strict mode)
// Using delete will return false
// It makes every property non-configurable, and they cannot be converted from 
// data accessors to properties (and vice versa)

// Object.freeze

// Exactly what Object.seal does, plus:
// It prevents changing any existing properties

// Neither one affects children objects
// (e.g. if obj is frozen or sealed, obj.el can't be changed, but obj.el.id can)

// In summary: 

// Freeze: makes the object immutable, meaning no change to defined property allowed, 
// unless they are objects.

// Seal: prevent addition of properties, however defined properties still can be changed.