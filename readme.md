# Design Patterns in TypeScript

This repository contains examples of common design patterns implemented in TypeScript.

## Patterns Implemented

### 1. Abstract Factory Pattern
Located in [src/abstract-pattern](src/abstract-pattern), this pattern provides an interface for creating families of related objects without specifying their concrete classes.

- `abstract-type.ts`: Contains interfaces for products and factory
- `concrete.ts`: Implements concrete factories and products
- `client.ts`: Shows usage example

### 2. Adapter Pattern 
Located in [src/adapter-pattern](src/adapter-pattern), this pattern allows incompatible interfaces to work together by wrapping an object in an adapter to make it compatible with another class.

- `abstract-type.ts`: Defines interfaces for media players
- `adaptee.ts`: Contains the incompatible interfaces (VLC and MP4 players)
- `adapter.ts`: Implements the adapter that bridges different formats
- `client.ts`: Demonstrates usage

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run examples:
```bash
npx ts-node src/abstract-pattern/client.ts
npx ts-node src/adapter-pattern/client.ts
```

## References
- Original discussion: https://chatgpt.com/share/682328b8-d88c-8007-bf92-7a19e5daaf01